const Divider = ({ color }: { color: string }) => (
  <div>
    {
      <svg
        className="absolute bottom-0 overflow-hidden"
        preserveAspectRatio="none"
        style={{ bottom: '-0.4px' }}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 2560 70"
        x="0"
        y="0"
      >
        <polygon
          className={`text-${color} fill-current`}
          points="2560 0 2560 70 0 70"
        ></polygon>
      </svg>
    }
  </div>
)

export default Divider
