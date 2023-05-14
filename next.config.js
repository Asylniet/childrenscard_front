/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/post/api/:path*',
        destination: 'http://77.240.38.160/:path*/' // Proxy to Backend
      },
      {
        source: '/api/:path*',
        destination: 'http://77.240.38.160/:path*' // Proxy to Backend
      },
    ]
  }
};

module.exports = nextConfig