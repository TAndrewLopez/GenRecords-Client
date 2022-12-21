const Hamburger = ({ visible }) => {
  return (
    <button
      className="border-accent border-2 rounded group"
      aria-controls="primary-navigation"
      aria-expanded="false">
      <svg className={"fill-shade-1"} viewBox="0 0 100 100" width={25}>
        <rect
          className={`origin-center ease-in-out duration-300 
          ${visible ? "rotate-45" : ""}`}
          x={10}
          y={visible ? 45 : 20}
          width={80}
          height={10}
          rx={5}></rect>
        <rect
          className={`origin-center ease-in-out duration-300
          ${visible ? "opacity-0" : "opacity-100"}`}
          x={10}
          y={45}
          width={80}
          height={10}
          rx={5}></rect>
        <rect
          className={`origin-center ease-in-out duration-300
          ${visible ? "-rotate-45" : ""}`}
          x={10}
          y={visible ? 45 : 70}
          width={80}
          height={10}
          rx={5}></rect>
      </svg>
    </button>
  );
};

export default Hamburger;
