import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave this empty for default ports
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        port: "", // Leave this empty for default ports
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        port: "", // Leave this empty for default ports
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "sirixmonitoring.com",

        port: "", // Leave this empty for default ports
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",

        port: "", // Leave this empty for default ports
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
