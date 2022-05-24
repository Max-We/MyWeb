/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.sanity.io',
      'pbs.twimg.com',
      'abs.twimg.com', // Default twitter user profile picture urls
    ],
  },
}
