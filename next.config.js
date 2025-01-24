/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    async headers() {
      return [
        {
          source: "/(.*)", // Platí pro všechny stránky
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY",
            },
            {
              key: "Referrer-Policy",
              value: "no-referrer-when-downgrade", // Povolení předávání refereru na většinu requestů
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  