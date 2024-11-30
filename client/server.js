const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");
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
    const apiUrl = "http://localhost/TeaJarWebsite/server/api/get-mode"; // Example with http

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

// Fetch the mode and start the server
getModeFromApi()
  .then((fetchedMode) => {
    mode = fetchedMode; // Set the mode fetched from the API
    console.log(`Mode fetched from API: ${mode}`);

    app.prepare().then(() => {
      createServer(async (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        // Serve Maintenance or Coming Soon Mode pages if applicable
        if (mode === "maintenance") {
          serveStaticHtml(res, "maintenance.html", 503);
          return;
        }

        if (mode === "coming-soon") {
          serveStaticHtml(res, "coming-soon.html", 200);
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

        // API endpoint to get the current mode
        if (pathname === "/api/get-mode") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ mode }));
          return;
        }

        // Serve Maintenance or Coming Soon Mode pages if applicable
        if (mode === "maintenance") {
          serveStaticHtml(res, "maintenance.html", 503);
          return;
        }

        if (mode === "coming-soon") {
          serveStaticHtml(res, "coming-soon.html", 200);
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
