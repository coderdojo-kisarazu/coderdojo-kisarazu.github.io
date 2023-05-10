/** @type {import('next').NextConfig} */

//
// GitHub Pagesでリポジトリ名を含むURLにするための設定
// GitHub の環境変数として REPOSITORY_NAME を設定しておく
// 例: https://<username>.github.io/<repositoryName>
//
const repositoryName = process.env.REPOSITORY_NAME
  ? '/' + process.env.REPOSITORY_NAME
  : ''

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: { repositoryName }
}

module.exports = nextConfig
