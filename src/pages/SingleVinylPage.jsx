import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleVinyl } from "../../redux/features/shopSlice";
import { Header, Footer, DetailedVinylCard } from "../components";

const SingleVinylPage = () => {
  const dispatch = useDispatch();
  const {
    shopReducer: { singleVinyl },
    authReducer: { cart },
  } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleVinyl(id));
  }, []);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex justify-center bg-shade-7 ">
        <DetailedVinylCard singleVinyl={singleVinyl} cart={cart} />
      </div>
      <Footer
        twClass={"px-5 py-3 text-white flex justify-center bg-shade-9 "}
      />
    </>
  );
};

export default SingleVinylPage;
