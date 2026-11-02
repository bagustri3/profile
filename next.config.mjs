/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  output: "export",

  basePath: isProduction ? "/profile" : "",

  // Not required when using basePath for standard Next.js assets
  // assetPrefix: isProduction ? "/profile/" : "",

  allowedDevOrigins: ["192.168.1.11"],
};

export default nextConfig;
