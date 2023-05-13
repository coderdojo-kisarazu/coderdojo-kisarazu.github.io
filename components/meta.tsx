import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'
import url from '../lib/url'

type Props = { title?: string }

console.log(url(HOME_OG_IMAGE_URL, true))

const Meta = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="CoderDojo Kisarazu Landing Page" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href={url('/favicon/icon-192x192.png')}
      />
      <link rel="icon" href={url('/favicon/favicon.ico')} />
      <meta property="og:site_name" content="CoderDojo Kisarazu" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="CoderDojo木更津のホームページです。"
      />
      <meta property="og:image" content={url(HOME_OG_IMAGE_URL, true)} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="CoderDojo木更津のホームページです。"
      />
      <meta name="twitter:image:src" content={url(HOME_OG_IMAGE_URL, true)} />
    </Head>
  )
}

export default Meta
