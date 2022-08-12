/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiUrl: "http://localhost:4000",
  },
  images: {
    domains: ["rickandmortyapi.com", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
