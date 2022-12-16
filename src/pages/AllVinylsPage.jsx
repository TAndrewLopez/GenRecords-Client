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
  const { allVinyls, isLoading, shopError } = useSelector(
    (state) => state.shopReducer
  );

  //SEARCH FIELD STATES
  const [userInput, setUserInput] = useState("");
  const [filteredAlbums, setFilterAlbums] = useState([]);
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
  const currSlice =
    filteredAlbums.length || userInput
      ? filteredAlbums.slice(indexOfFirstPost, indexOfLastPost)
      : allVinyls.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrPage(pageNumber);

  useEffect(() => {
    if (!allVinyls.length) {
      dispatch(shopGetVinyls());
    }
  }, []);

  useEffect(() => {
    setFilterAlbums(allVinyls);
  }, [allVinyls]);

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
            <DropDown
              set={setFilterAlbums}
              sortOptions={[]}
              vinyls={filteredAlbums}
            />
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

const sortByAlbumName = (arr, dir) => {
  if (dir) {
    arr.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
};
