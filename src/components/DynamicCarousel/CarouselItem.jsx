const CarouselItem = ({ image, startSlide, stopSlide }) => {
  return (
    <div
      className="inline-block w-full"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}>
      <img className="w-full" src={image.src} alt={image.alt} />
    </div>
  );
};

export default CarouselItem;
