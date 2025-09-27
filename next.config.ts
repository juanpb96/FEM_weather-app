import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  assetPrefix: process.env.WEATHER_APP_PATH || "",
};

export default nextConfig;
