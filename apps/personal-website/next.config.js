/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['shared'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/resume',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
