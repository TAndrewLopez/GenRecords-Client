import { Header, Footer } from "../components";

const ProfilePage = () => {
  return (
    <>
      <Header headerClass={"flex justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex justify-center bg-shade-7">Profile Page</div>
      <Footer />
    </>
  );
};

export default ProfilePage;
