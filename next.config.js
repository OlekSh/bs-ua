/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com','s.mind.ua', 'mind.ua'],
  }
}

module.exports = nextConfig
