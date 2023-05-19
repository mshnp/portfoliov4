/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["cdn.sanity.io"],
  },
  swcMinify: true,
  transpilePackages: ['sanity-plugin-mux-input', 'media-chrome/dist/react'],
}

module.exports = nextConfig;

