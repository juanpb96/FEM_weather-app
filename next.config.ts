import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/FEM_weather-app",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/FEM_weather-app",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
