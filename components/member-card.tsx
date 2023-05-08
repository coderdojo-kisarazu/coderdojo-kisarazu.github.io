type Props = {
  name: string
  role: string
  icon: string
  profession: string
}

const MemberCard = ({ name, role, icon, profession }: Props) => (
  <div className="w-full md:w-1/5 lg:w-1/5 lg:mb-0 mb-12 px-4">
    <div className="px-6">
      <img
        alt={name}
        src={icon}
        className="shadow-lg rounded-full max-w-full mx-auto"
        style={{ maxWidth: '120px' }}
      />
      <div className="pt-6 text-center">
        <h5 className="text-xl font-bold">{name}</h5>
        <div className="mt-1 text-sm text-gray-500 font-semibold">
          <p>{role}</p>
          <p>得意技: {profession}</p>
        </div>
        {/*
        <div className="mt-6">
          <button
            className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
            type="button"
          >
            <i className="fab fa-dribbble"></i>
          </button>
        </div>
        */}
      </div>
    </div>
  </div>
)

export default MemberCard
