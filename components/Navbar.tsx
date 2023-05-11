import { ReactElement, useEffect, useState } from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

interface Props {
  transparent?: boolean
}

function Navbar(props: Props): ReactElement {
  const size = 32
  const [path, setPath] = useState('')
  useEffect(() => {
    setPath(window.location.href)
  }, [])

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
        <div className="flex flex-row list-none ml-auto gap-3">
          <FacebookShareButton url={path}>
            <FacebookIcon size={size} round />
          </FacebookShareButton>
          <TwitterShareButton url={path}>
            <TwitterIcon size={size} round />
          </TwitterShareButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
