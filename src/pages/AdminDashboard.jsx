import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminGetUsers, adminGetVinyls } from "../../redux/features/adminSlice";
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const {
    adminReducer: { users, vinyls, adminError },
  } = useSelector((state) => state);

  useEffect(() => {
    if (!users.length) {
      dispatch(adminGetUsers());
    }
    if (!vinyls.length) {
      dispatch(adminGetVinyls());
    }
  }, []);

  return (
    <div className="flex-1 flex justify-center bg-shade-7">
      {`Users loaded: ${users.length}`} <br />
      {`Vinyls loaded: ${vinyls.length}`}
    </div>
  );
};

export default AdminDashboard;
