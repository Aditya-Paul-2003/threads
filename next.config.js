/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Remove the object wrapper
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  // Move typescript config to the root level
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;