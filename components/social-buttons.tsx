import { useRouter } from 'next/router'
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const SocialButtons = ({
  path,
  size = 48,
}: {
  path: string
  size?: number
}) => {
  const router = useRouter()

  return (
    <div className="justify-center flex gap-4 mt-8 mx-auto">
      <FacebookShareButton url={path}>
        <FacebookIcon size={size} round />
      </FacebookShareButton>
      <TwitterShareButton url={path}>
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <HatenaShareButton url={path}>
        <HatenaIcon size={size} round />
      </HatenaShareButton>
      <PocketShareButton url={path}>
        <PocketIcon size={size} round />
      </PocketShareButton>
    </div>
  )
}

export default SocialButtons
