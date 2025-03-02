import { ReactNode } from 'react'
import url from '../lib/url'
import Divider from './divider'
import SocialButtons from './social-buttons'

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
            <SocialButtons path={url('', true)} />
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
                    <Anchor href="https://coderdojo.com/">
                      CoderDojo
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%BC%E3%83%80%E3%83%BC%E9%81%93%E5%A0%B4
">
                      CoderDojo Wikipedia
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://www.facebook.com/npo.kazusalab/?locale=ja_JP">
                      上総らぼ　公式FaceBook
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://kazusalab.org/">
                      上総らぼ　公式Webサイト
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="https://zenn.dev/naoji">
                      Naojiさんのブログ
                    </Anchor>
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
