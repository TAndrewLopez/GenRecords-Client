import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopGetVinyls } from "../../redux/features/shopSlice";
import {
  Carousel,
  Header,
  Footer,
  SpinningLoader,
  VinylCard,
} from "../components";

const AllVinylsPage = () => {
  const dispatch = useDispatch();
  const { allVinyls, isLoading, shopError } = useSelector(
    (state) => state.shopReducer
  );

  useEffect(() => {
    if (!allVinyls.length) {
      dispatch(shopGetVinyls());
    }
  }, []);

  if (shopError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <SpinningLoader />;
  }

  return (
    <>
      <Header
        headerClass={
          "flex text-xl justify-between p-5 bg-shade-9 min-w-[350px]"
        }
      />

      <div className="flex-1 flex flex-col justify-center min-w-[350px]">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div>sort options, searchbar, genres</div>
            <div className="flex flex-wrap justify-center bg-shade-6">
              {allVinyls.map((vinyl) => (
                <VinylCard vinyl={vinyl} key={vinyl.id} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer
        twClass={
          "px-5 py-3 text-white flex justify-center bg-shade-9 min-w-[350px]"
        }
      />
    </>
  );
};

export default AllVinylsPage;
