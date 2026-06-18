import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers compatibility
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  // Ensuring output is optimized for serverless/edge if needed
  // Note: For Cloudflare Pages/Workers, 'output: export' is sometimes used for static, 
  // but for SSR we keep it default and use the Cloudflare adapter during build.
};

export default nextConfig;
