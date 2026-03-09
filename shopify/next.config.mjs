/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all HTTPS domains
      },
      {
        protocol: "http",
        hostname: "**", // Allow all HTTP domains
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*", // Matches all paths
        has: [
          {
            type: "host",
            value: "www.teajarceylon.com", // Match "www.teajarceylon.com"
          },
        ],
        destination: "https://teajarceylon.com/:path*", // Redirect to non-www version
        permanent: true, // 301 permanent redirect
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)", // Apply middleware to static files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
