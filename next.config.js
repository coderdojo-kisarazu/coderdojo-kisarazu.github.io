/** @type {import('next').NextConfig} */

const assetPrefix = process.env.ASSET_PREFIX
  ? '/' + process.env.ASSET_PREFIX
  : ''

const nextConfig = {
  assetPrefix,
  basePath: assetPrefix
}

module.exports = nextConfig
