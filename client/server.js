const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");
const cookie = require("cookie"); // Use cookie parser for handling cookies
const https = require("https"); // Use 'https' or 'http' depending on your endpoint

// Default mode, will be updated from the remote API
let mode = "normal";

// Environment setup
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

// Initialize the Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const http = require("http");
const url = require("url");

function getModeFromApi() {
  return new Promise((resolve, reject) => {
    // Replace this URL with your actual endpoint
    const apiUrl = "https://kduserver.payshia.com/api/get-mode"; // Example with http

    // Parse the URL to get the protocol
    const parsedUrl = url.parse(apiUrl);

    // Choose the correct module based on the protocol (http or https)
    const requestModule = parsedUrl.protocol === "https:" ? https : http;

    // Make the HTTP or HTTPS request
    requestModule
      .get(apiUrl, (res) => {
        let data = "";

        // A chunk of data has been received.
        res.on("data", (chunk) => {
          data += chunk;
        });

        // The whole response has been received.
        res.on("end", () => {
          try {
            const response = JSON.parse(data);
            resolve(response.mode); // Resolving with the mode from the API
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

// Poll for mode every 5 minutes (300000ms)
setInterval(() => {
  getModeFromApi()
    .then((fetchedMode) => {
      if (fetchedMode !== mode) {
        mode = fetchedMode; // Update the mode
        console.log(`Mode updated to: ${mode}`);
      }
    })
    .catch((err) => {
      console.error("Error fetching mode:", err);
    });
}, 300000); // Poll every 5 minutes

// Fetch the mode and start the server
getModeFromApi()
  .then((fetchedMode) => {
    mode = fetchedMode; // Set the mode fetched from the API
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

        // Handle based on mode
        if (mode === "coming-soon" && !isDeveloper) {
          serveStaticHtml(res, "coming-soon.html", 200);
          return;
        }

        if (mode === "maintenance" && !isDeveloper) {
          serveStaticHtml(res, "maintenance.html", 503);
          return;
        }

        // Normal handling for Next.js pages
        if (pathname === "/a") {
          await app.render(req, res, "/a", query);
        } else if (pathname === "/b") {
          await app.render(req, res, "/b", query);
        } else {
          await handle(req, res, parsedUrl);
        }
      }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
      });
    });
  })
  .catch((err) => {
    console.error("Failed to fetch mode:", err);
    // Fallback to default mode if there's an issue fetching the mode
    mode = "normal";
    console.log(`Falling back to default mode: ${mode}`);

    app.prepare().then(() => {
      createServer(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        console.log(query.developer);
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
        // Handle based on mode
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
