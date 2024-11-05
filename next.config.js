/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { theme: "DEFAULT", currency: "USD" },
  output: 'standalone',
  productionBrowserSourceMaps: false,
  publicRuntimeConfig: { theme: "DEFAULT", currency: "USD" },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ui-lib.com" }],
  },
};

module.exports = nextConfig;
