import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shopGetVinyls } from "../../redux/features/shopSlice";
import {
  Header,
  Footer,
  VinylCard,
  DropDown,
  Pagination,
  SearchField,
} from "../components";

import { SpinningLoader } from "../components/assets";

const AllVinylsPage = () => {
  const dispatch = useDispatch();
  const { allVinyls, isLoading, shopError } = useSelector(
    (state) => state.shopReducer
  );

  //PAGINATION
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const indexOfLastPost = currPage * 20;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currSlice = allVinyls.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrPage(pageNumber);

  useEffect(() => {
    if (!allVinyls.length) {
      dispatch(shopGetVinyls());
    }
  }, []);

  if (shopError) {
    return <div>{`Error: ${shopError}`}</div>;
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

      <div className="flex-1 flex flex-col justify-center min-w-[350px] bg-shade-6">
        {/* <ul>
          <li>Featured</li>
          <li>Top</li>
          <li>Holiday?</li>
        </ul> */}

        <ul className="p-3 flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between">
          <li>
            <SearchField />
          </li>
          <li>
            <DropDown />
          </li>
        </ul>

        <div className="flex flex-wrap justify-center">
          {currSlice.map((vinyl) => (
            <VinylCard vinyl={vinyl} key={vinyl.id} />
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          total={allVinyls.length}
          setPage={setCurrPage}
          currPage={currPage}
        />
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
