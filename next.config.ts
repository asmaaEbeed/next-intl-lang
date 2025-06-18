import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  // basePath: "/app",
  trailingSlash: true, // Optional but useful if using static exports
};

 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);