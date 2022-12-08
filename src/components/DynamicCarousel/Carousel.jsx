import { useEffect, useState, useRef } from "react";
import { CarouselItem, CarouselControls, CarouselIndicators } from "./";

const Carousel = ({
  slides,
  interval = 5000,
  controls = true,
  indicators = true,
  autoPlay = true,
  width,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const slide = (dir) => {
    let index;
    if (dir) {
      index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    } else {
      index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    }
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoPlay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoPlay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden" style={{ maxWidth: width }}>
        <div
          className={`whitespace-nowrap ease-in-out duration-300`}
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
          {slides.map((image, i) => (
            <CarouselItem
              image={image}
              key={image.alt + i}
              startSlide={startSlideTimer}
              stopSlide={stopSlideTimer}
            />
          ))}
        </div>
        {indicators && (
          <CarouselIndicators
            active={currentSlide}
            images={slides}
            switchIndex={switchIndex}
            hoverColor="sec"
          />
        )}

        {controls && <CarouselControls slide={slide} hoverColor="sec" />}
      </div>
    </div>
  );
};

export default Carousel;
