import Image from 'next/image'
import url from '../lib/url'

type Props = {
  name: string
  role: string
  icon: string
  profession: string
}

const MemberCard = ({ name, role, icon, profession }: Props) => (
  <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 lg:mb-0 mb-12 px-4">
    <div className="px-6">
      <Image
        alt={name}
        src={url(icon)}
        width="120"
        height="120"
        className="shadow-lg rounded-full max-w-full mx-auto"
      />
      <div className="pt-6 text-center">
        <h5 className="text-xl font-bold">{name}</h5>
        <div className="mt-1 text-sm text-gray-500 font-semibold">
          <p>{role}</p>
          <p>得意技: {profession}</p>
        </div>
      </div>
    </div>
  </div>
)

export default MemberCard
