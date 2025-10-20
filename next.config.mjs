// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Recommended for Docker
  experimental: {
    esmExternals: true,
  },
}

module.exports = nextConfig