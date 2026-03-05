import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ts-portfolio",
  assetPrefix: "/ts-portfolio/",
};

export default nextConfig;
