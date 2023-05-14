import { ReactElement } from 'react'
import url from '../lib/url'
import SocialButtons from './social-buttons'

interface Props {
  transparent?: boolean
}

function Navbar(props: Props): ReactElement {
  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-auto static block justify-start">
          <a
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              ' title-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap'
            }
            href="/"
          >
            CoderDojo 木更津
          </a>
        </div>
        <SocialButtons path={url('', true)} />
      </div>
    </nav>
  )
}

export default Navbar
