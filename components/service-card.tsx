import { ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode
  icon?: string
}

const ServiceCard = ({ title, children, icon }: Props) => (
  <div className="w-full md:w-4/12 px-4 text-center">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto">
        {icon === undefined ? (
          <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
            <i className="fas fa-award"></i>
          </div>
        ) : (
          <div className="text-center inline-flex items-center justify-center h-28">
            <img
              alt="CoderDojoKisarazu Icon"
              src={icon}
              className="h-auto align-middle border-none"
              style={{ maxHeight: '100px' }}
            />
          </div>
        )}
        <div className="2xl:h-36 xl:h-44 lg:h-48 md:h-80">
          <h6 className="text-xl font-semibold">{title}</h6>
          {children !== undefined && (
            <div className="mt-2 mb-4 px-3 text-gray-600 text-left">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default ServiceCard
