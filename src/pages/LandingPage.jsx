import { Carousel } from "../components/DynamicCarousel/index";

//ASSETS
import images from "../assets/index";

const LandingPage = () => {
  return (
    <div className="">
      <Carousel slides={images} />
    </div>
  );
};

export default LandingPage;
