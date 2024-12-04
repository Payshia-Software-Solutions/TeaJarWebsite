const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");
const cookie = require("cookie");
const https = require("https"); // Use 'https' for secure protocol
const http = require("http"); // Use 'http' for local development

// Default mode, will be updated from the remote API
let mode = "normal";

// Environment setup
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

// Initialize the Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const url = require("url");

function getModeFromApi() {
  return new Promise((resolve, reject) => {
    const apiUrl = "https://kduserver.payshia.com/api/get-mode"; // Example with http

    const parsedUrl = url.parse(apiUrl);
    const requestModule = parsedUrl.protocol === "https:" ? https : http;

    requestModule
      .get(apiUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            const response = JSON.parse(data);
            resolve(response.mode);
          } catch (err) {
            reject("Error parsing response from API");
          }
        });
      })
      .on("error", (err) => {
        reject("Error fetching mode from API: " + err.message);
      });
  });
}

setInterval(() => {
  getModeFromApi()
    .then((fetchedMode) => {
      if (fetchedMode !== mode) {
        mode = fetchedMode;
        console.log(`Mode updated to: ${mode}`);
      }
    })
    .catch((err) => {
      console.error("Error fetching mode:", err);
    });
}, 300000);

getModeFromApi()
  .then((fetchedMode) => {
    mode = fetchedMode;
    console.log(`Mode fetched from API: ${mode}`);

    app.prepare().then(() => {
      createServer(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        // Parse cookies
        const cookies = cookie.parse(req.headers.cookie || "");

        // Set a cookie if developer access is requested via query parameter
        if (query.developer === "true") {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("developer-access", "true", {
              httpOnly: true,
              path: "/",
              maxAge: 3600 * 24, // 1 day
            })
          );
          console.log("Developer access granted via query.");
        } else if (query.developer === "false") {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("developer-access", "", {
              httpOnly: true,
              path: "/",
              expires: new Date(0), // Set cookie to expire
            })
          );
          console.log("Developer access removed.");
        }

        // Check if developer access
        const isDeveloper =
          query.developer === "true" || cookies["developer-access"] === "true";

        // Handle www to non-www redirection with protocol adjustment
        const host = req.headers.host || "";
        let redirectUrl;

        if (host.startsWith("www.")) {
          // If the host is www.*, remove 'www.' and redirect to the correct protocol
          if (host.includes("localhost")) {
            // If localhost, use http://
            redirectUrl = `http://${host.replace("www.", "")}${req.url}`;
          } else {
            // For other domains, use https://
            redirectUrl = `https://${host.replace("www.", "")}${req.url}`;
          }
          res.writeHead(301, { Location: redirectUrl });
          res.end();
          return;
        }

        // Serve Maintenance or Coming Soon Mode pages if applicable
        if (mode === "coming-soon" && !isDeveloper) {
          serveStaticHtml(res, "coming-soon.html", 200);
          return;
        }

        if (mode === "maintenance" && !isDeveloper) {
          serveStaticHtml(res, "maintenance.html", 503);
          return;
        }

        // Normal handling for Next.js pages
        await handle(req, res, parsedUrl);
      }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
      });
    });
  })
  .catch((err) => {
    console.error("Failed to fetch mode:", err);
    mode = "normal";
    console.log(`Falling back to default mode: ${mode}`);

    app.prepare().then(() => {
      createServer(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        // Parse cookies
        const cookies = cookie.parse(req.headers.cookie || "");

        // Set a cookie if developer access is requested via query parameter
        if (query.developer === "true") {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("developer-access", "true", {
              httpOnly: true,
              path: "/",
              maxAge: 3600 * 24, // 1 day
            })
          );
          console.log("Developer access granted via query.");
        } else if (query.developer === "false") {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("developer-access", "", {
              httpOnly: true,
              path: "/",
              expires: new Date(0), // Set cookie to expire
            })
          );
          console.log("Developer access removed.");
        }

        // Check if developer access
        const isDeveloper =
          query.developer === "true" || cookies["developer-access"] === "true";

        // API endpoint to get the current mode
        if (pathname === "/api/get-mode") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ mode }));
          return;
        }

        // Serve Maintenance or Coming Soon Mode pages if applicable
        if (mode === "coming-soon" && !isDeveloper) {
          serveStaticHtml(res, "coming-soon.html", 200);
          return;
        }

        if (mode === "maintenance" && !isDeveloper) {
          serveStaticHtml(res, "maintenance.html", 503);
          return;
        }

        await handle(req, res, parsedUrl);
      }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
      });
    });
  });

// Helper function to serve static HTML files
function serveStaticHtml(res, fileName, statusCode) {
  const filePath = path.join(__dirname, "public", fileName);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading page");
      return;
    }

    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(data);
  });
}
