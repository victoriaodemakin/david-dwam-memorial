/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fedskillstest.ct.digital"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Only add output/assetPrefix when you're ready to deploy
};

module.exports = nextConfig;