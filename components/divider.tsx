const Divider = ({ color }: { color: string }) => (
  <svg
    className="absolute bottom-0 overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
    viewBox="0 0 3840 100"
    x="0"
    y="0"
  >
    <polygon
      className={`text-${color} fill-current`}
      points="3840 0 3840 101 0 101"
    ></polygon>
  </svg>
)

export default Divider
