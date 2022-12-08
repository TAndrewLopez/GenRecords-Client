import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVinyls } from "../../redux/features/shopSlice";

const AllVinylsPage = () => {
  const dispatch = useDispatch();
  const {
    shopReducer: { allVinyls, isLoading, shopError },
  } = useSelector((state) => state);

  useEffect(() => {
    if (!allVinyls.length) {
      dispatch(getVinyls());
    }
  }, []);

  if (shopError) {
    return <div>Error</div>;
  }

  return (
    <div className="flex-1 flex justify-center bg-shade-7">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{`${allVinyls.length} Vinyls`}</div>
      )}
    </div>
  );
};

export default AllVinylsPage;