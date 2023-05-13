import { useRouter } from 'next/router'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

const SocialButtons = ({
  path,
  size = 32
}: {
  path: string
  size?: number
}) => {
  const router = useRouter()

  return (
    <div className="flex flex-row list-none ml-auto gap-3">
      <FacebookShareButton url={path}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton url={path}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
    </div>
  )
}

export default SocialButtons
