import { ReactNode, useEffect, useState } from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import Divider from './divider'

type Props = {
  href: string
  children?: ReactNode
}
const Anchor = ({ href, children }: Props) => (
  <a
    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
    href={href}
  >
    {children}
  </a>
)

const Footer = () => {
  const size = 32
  const [path, setPath] = useState('')
  useEffect(() => {
    setPath(window.location.href)
  }, [])

  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      <div
        className="bottom-auto top-0 w-full absolute pointer-events-none -mt-20"
        style={{ height: '80px' }}
      >
        <Divider color="gray-300" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-2xl font-semibold">
              子どものためのプログラミング道場
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              CoderDojoは公園のようなプログラミングを楽しむコミュニティ
            </h5>
            <div className="flex flex-row list-none ml-auto gap-3 my-5">
              <FacebookShareButton url={path}>
                <FacebookIcon size={size} round />
              </FacebookShareButton>
              <TwitterShareButton url={path}>
                <TwitterIcon size={size} round />
              </TwitterShareButton>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  リンク
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Anchor href="https://www.facebook.com/coderdojokisarazu">
                      Facebookページ
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://coderdojo.chiba.jp">
                      CoderDojo千葉県
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://coderdojo.jp/">
                      CoderDojo Japan
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://coderdojo.com/">CoderDojo</Anchor>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} CoderDojo Kisarazu
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
