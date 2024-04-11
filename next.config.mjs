/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "/.next",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
