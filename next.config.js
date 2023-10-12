/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org','www.themoviedb.org','localhost'],
  },
}

module.exports = nextConfig
