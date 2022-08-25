/** @type {import('next').NextConfig} */
const auth = {
  // user: 'fordevelopresources@gmail.com',
  // pass: 'ddiewtzwaccsyslp',
  // target: 'sourceregister@gmail.com'
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com','s.mind.ua', 'mind.ua'],
  }
}

module.exports = nextConfig
