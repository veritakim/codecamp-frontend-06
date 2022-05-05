/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "trudru",
  exportPathMap: () => ({
    "/": { page: "/"},
    "/board": {page: "/board"},
    "/404": {page: "/404"}
  })
}

module.exports = nextConfig
