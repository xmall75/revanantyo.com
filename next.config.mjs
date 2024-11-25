/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },

  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "@emotion/react",
      "@emotion/styled",
      "framer-motion",
    ],
  },

  // Uncoment to add domain whitelist
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
