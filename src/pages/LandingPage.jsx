import { Carousel } from "../components/DynamicCarousel/index";

//ASSETS
import images from "../assets/index";

const LandingPage = () => {
  return (
    <div className="flex-1 flex ">
      <Carousel slides={images} interval={5000} />
    </div>
  );
};

export default LandingPage;
