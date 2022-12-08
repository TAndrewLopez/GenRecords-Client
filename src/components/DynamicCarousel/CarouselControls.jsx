import { SqLeftArrow, SqRightArrow } from "./assets";

const CarouselControls = ({ slide, hoverColor = "blue-300" }) => {
  return (
    <div>
      <button
        className="absolute top-[calc(50%-25px)] left-0 bg-[rgba(33,37,41,0.5)] flex items-center justify-center"
        onClick={(evt) => {
          slide(false);
        }}>
        <SqLeftArrow
          twClass={`w-8 fill-white opacity-50 hover:fill-${hoverColor} hover:opacity-100`}
        />
      </button>
      <button
        className="absolute top-[calc(50%-25px)] right-0 bg-[rgba(33,37,41,0.5)] flex items-center justify-center"
        onClick={(evt) => {
          slide(true);
        }}>
        <SqRightArrow
          twClass={`w-8 fill-white opacity-50 hover:fill-${hoverColor} hover:opacity-100`}
        />
      </button>
    </div>
  );
};

export default CarouselControls;
