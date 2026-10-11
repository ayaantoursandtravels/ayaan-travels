import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  basePath: ".",
  assetPrefix: ".",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
