/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.giphy.com", "pbs.twimg.com"],
  },
};

module.exports = nextConfig;
