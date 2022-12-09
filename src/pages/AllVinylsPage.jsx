import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopGetVinyls } from "../../redux/features/shopSlice";
import { Header, Footer, SpinningLoader } from "../components";

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
      <Header headerClass={"flex justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex justify-center bg-shade-7">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>{`${allVinyls.length} Vinyls`}</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllVinylsPage;
