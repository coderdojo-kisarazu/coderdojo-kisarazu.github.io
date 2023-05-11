import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

type Props = { title?: string }

const Meta = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="CoderDojo Kisarazu Landing Page" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/favicon/icon-192x192.png"
      />
      <link rel="icon" href="/favicon/favicon.ico" />
      <meta property="og:site_name" content="CoderDojo Kisarazu" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="CoderDojo Kisarazu Landing Page"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="CoderDojo Kisarazu Landing Page"
      />
      <meta name="twitter:image:src" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
