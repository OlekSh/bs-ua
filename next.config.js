/** @type {import('next').NextConfig} */
const auth = {

}

const nextConfig = {
  reactStrictMode: true,
  env: auth,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com','s.mind.ua', 'mind.ua'],
  }
}

module.exports = nextConfig
