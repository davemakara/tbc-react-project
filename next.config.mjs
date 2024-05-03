/** @type {import('next').NextConfig} */
const nextConfig = {
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
    NEXT_PUBLIC_DEVELOPMENT_URL: "http://localhost:3000/",
    NEXT_PUBLIC_PRODUCTION_URL: "https://tbc-acceleration-project.vercel.app/",
  },
};

export default nextConfig;
