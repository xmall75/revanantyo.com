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
  // images: {
  //   domains: ['res.cloudinary.com'],
  // }
};

export default nextConfig;
