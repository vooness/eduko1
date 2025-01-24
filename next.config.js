/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Doporučeno pro lepší debugování
    experimental: {
      appDir: true, // Pokud používáte složku "app" pro stránky
    },
    // Další volitelná nastavení
    async headers() {
      return [
        {
          source: "/(.*)", // Platí pro všechny stránky
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY", // Zabránění načítání v iframu (pro bezpečnost)
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin", // Nastavení politiky referreru
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  