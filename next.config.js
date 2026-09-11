// const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
// module.exports = withNextra()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
export default nextConfig
