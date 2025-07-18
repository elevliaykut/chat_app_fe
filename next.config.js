/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      //domains: ['127.0.0.1'], // Laravel backend'in çalıştığı domain veya IP
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '127.0.0.1',
          port: '8000', // Laravel backend'ini bu portta çalıştırıyorsan belirt
          pathname: '/storage/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'bikalp.xyz',
          pathname: '/storage/uploads/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  