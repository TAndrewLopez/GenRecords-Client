import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Footer } from "../components";
import { adminGetUsers, adminGetVinyls } from "../../redux/features/adminSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, vinyls, adminError } = useSelector(
    (state) => state.adminReducer
  );

  useEffect(() => {
    if (!users.length) {
      dispatch(adminGetUsers());
    }
    if (!vinyls.length) {
      dispatch(adminGetVinyls());
    }
  }, []);

  if (adminError) {
    return <div>Admin Error has Occurred</div>;
  }

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex justify-center bg-shade-7 ">
        {`Users loaded: ${users.length}`} <br />
        {`Vinyls loaded: ${vinyls.length}`}
      </div>
      <Footer
        twClass={"px-5 py-3 text-white flex justify-center bg-shade-9 "}
      />
    </>
  );
};

export default AdminDashboard;
