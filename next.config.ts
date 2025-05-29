import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "en.wikipedia.org",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "cdn.kinde.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "gravatar.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "www.pexels.com",
        protocol: "https",
        port: "",
      },{
        hostname: "placehold.co",
        protocol: "https",
        port: "",
      }
    ],
  },
};

export default nextConfig;
