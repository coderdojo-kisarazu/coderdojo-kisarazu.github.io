/** @type {import('next').NextConfig} */

//
// GitHub Pagesでリポジトリ名を含むURLにするための設定
// GitHub の環境変数として URL を設定しておく
// 例: https://<username>.github.io/<repositoryName>
//
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    schemeFqdn: process.env.SCHEME_FQDN
      ? process.env.SCHEME_FQDN
      : 'https://coderdojo-kisarazu.github.io',
    directory: process.env.DIRECTORY ? '/' + process.env.DIRECTORY : '',
    repositoryName: process.env.REPOSITORY_NAME
      ? '/' + process.env.REPOSITORY_NAME
      : ''
  }
}

module.exports = nextConfig
