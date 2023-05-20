/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'i.annihil.us',
            port: '',
            pathname: '/u/prod/marvel/**',
          },
        ],
      },
}

module.exports = nextConfig
