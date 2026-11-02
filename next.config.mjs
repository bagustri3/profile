/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio/",
  allowedDevOrigins: ['192.168.1.11'],
};

export default nextConfig;
