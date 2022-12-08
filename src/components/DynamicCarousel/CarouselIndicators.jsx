const CarouselIndicators = ({
  active,
  images,
  switchIndex,
  hoverColor = "blue-300",
}) => {
  return (
    <div className="absolute -translate-x-1/2 bottom-[1.5em] left-1/2 z-10 flex gap-2">
      {images.map((img, i) => (
        <button
          className={`w-4 h-4 bg-white rounded-full hover:bg-${hoverColor} hover:opacity-100
          ${active === i ? "opacity-100" : "opacity-50"}`}
          onClick={() => switchIndex(i)}
          key={img.alt + i}></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
