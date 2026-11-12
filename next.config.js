/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Disable strict mode in development for better HMR
  reactStrictMode: true,

  // Enable SWC minification for faster builds
  swcMinify: true,

  // The old /projects page is now the /work page
  async redirects() {
    return [{ source: '/projects', destination: '/work', permanent: true }]
  },

  // Configure webpack for hot reload in Docker
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig