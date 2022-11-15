/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/_error",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
