import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShopVinyls } from "../../redux/features/shopSlice";
import {
  Header,
  Footer,
  VinylCard,
  DropDown,
  Pagination,
  SearchField,
  SortSelector,
} from "../components";

import { SpinningLoader } from "../components/assets";

// import {
//   sortAlbumNames,
//   sortArtistName,
//   sortPopularityScore,
//   sortPrice,
// } from "../../redux/features/shopSlice";

const AllVinylsPage = () => {
  const dispatch = useDispatch();
  const { allVinyls, isLoading } = useSelector((state) => state.shopReducer);

  //SEARCH FIELD STATES
  const [userInput, setUserInput] = useState("");
  const [filteredAlbums, setFilterAlbums] = useState(allVinyls);
  // const sortOptions = [
  //   { method: "Name", sort: sortAlbumNames, test: sortByAlbumName },
  //   { method: "Artist", sort: sortArtistName, test: null },
  //   { method: "Popularity", sort: sortPopularityScore, test: null },
  //   { method: "Price", sort: sortPrice, test: null },
  // ];

  //PAGINATION
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const indexOfLastPost = currPage * 20;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currSlice = filteredAlbums.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (!allVinyls.length) {
      dispatch(getShopVinyls());
    }
  }, []);

  useEffect(() => {
    setFilterAlbums(allVinyls);
  }, [allVinyls]);

  if (isLoading) {
    return <SpinningLoader />;
  }

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />

      <div className="flex-1 flex flex-col justify-center bg-shade-7">
        <ul className="p-3 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between bg-shade-8">
          <li>
            <SearchField
              setInput={setUserInput}
              vinyls={allVinyls}
              filter={setFilterAlbums}
            />
          </li>
          <li>
            {/* FIXME: DROP DOWN ONLY WORKS FOR THE STORE BUT SEARCH FIELD USES LOCAL STATE */}
            <DropDown />
          </li>
        </ul>

        <h1 className="text-center text-5xl my-5 text-shade-1 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
          Discover Vinyls
        </h1>

        <div className="flex flex-1 flex-wrap justify-center">
          {currSlice.length ? (
            currSlice.map((vinyl) => <VinylCard vinyl={vinyl} key={vinyl.id} />)
          ) : (
            <p className="text-shade-1 text-3xl m-auto">
              Unfortunately, no results.
            </p>
          )}
        </div>

        <div className="mb-5">
          <Pagination
            itemsPerPage={itemsPerPage}
            total={filteredAlbums.length}
            setPage={setCurrPage}
            currPage={currPage}
          />
        </div>
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </>
  );
};

export default AllVinylsPage;
