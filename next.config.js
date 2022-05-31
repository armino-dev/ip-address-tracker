const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  pwa: {
      dest: 'public',
      runtimeCaching,
  }
})
