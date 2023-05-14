import Link from 'next/link'
import { ReactNode } from 'react'
type Props = {
  href: string
  children?: ReactNode
}

const Anchor = ({ href, children }: Props) => {
  return (
    <span className="text-blue-600 dark:text-blue-500 hover:underline">
      <Link href={href}>{children}</Link>
    </span>
  )
}

export default Anchor
