import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleVinyl } from "../../redux/features/shopSlice";
import {
  Header,
  Footer,
  DetailedVinylCard,
  TrackList,
  ToastNotification,
} from "../components";
import {
  clearErrorMessage,
  clearSuccessMessage,
} from "../../redux/features/authSlice";

const SingleVinylPage = () => {
  const dispatch = useDispatch();
  const {
    shopReducer: { singleVinyl },
    authReducer: { cart, error, message },
  } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleVinyl(id));
  }, []);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex flex-col justify-center bg-shade-7 ">
        <DetailedVinylCard singleVinyl={singleVinyl} cart={cart} />
        <TrackList vinyl={singleVinyl} />
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
      {message && (
        <ToastNotification
          clear={() => dispatch(clearSuccessMessage())}
          type="success"
          toastMessage={message}
        />
      )}

      {error && message && (
        <ToastNotification
          clear={() => dispatch(clearErrorMessage())}
          type="error"
          toastMessage={message}
        />
      )}
    </>
  );
};

export default SingleVinylPage;
