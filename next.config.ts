import type { NextConfig } from "next";

// Static export config for Netlify.
// - output: 'export' produces an /out folder.
// - images.unoptimized avoids Next Image optimization server.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
