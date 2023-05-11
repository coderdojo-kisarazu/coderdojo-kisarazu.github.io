import Head from 'next/head'
import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Meta from './meta'

interface Props {
  title?: string
  transparent?: boolean
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Meta title={props.title} />
      <header>
        <Navbar transparent={true} />
      </header>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
