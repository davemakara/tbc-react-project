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
  env: {
    NEXT_PUBLIC_URL: "http://localhost:3000/",
  },
};

export default nextConfig;
