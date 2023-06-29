/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', "i.familiscope.fr", 'www.pervo.ru', 'cdn.nur.kz', "static.chocolife.me"]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/post/api/:path*',
  //       destination: 'http://77.240.38.160/:path*/' // Proxy to Backend
  //     },
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://77.240.38.160/:path*' // Proxy to Backend
  //     },
  //   ]
  // }
};

module.exports = nextConfig