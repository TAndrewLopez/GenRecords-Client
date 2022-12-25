import { useState } from "react";
import {
  sortAlbumNames,
  sortArtistName,
  sortPopularityScore,
  sortPriceAmount,
} from "./helpers";

const DropDown = ({ vinyls, setFilterVinyl }) => {
  const [sortDropDown, setSortDropDown] = useState(false);
  const [sortNameDir, setSortNameDir] = useState(false);

  const sortOptions = [
    {
      method: "Name",
      sort: sortAlbumNames,
    },
    {
      method: "Artist",
      sort: sortArtistName,
    },
    {
      method: "Popularity",
      sort: sortPopularityScore,
    },
    {
      method: "Price",
      sort: sortPriceAmount,
    },
  ];

  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative">
          <button
            onClick={() => setSortDropDown(!sortDropDown)}
            className="dropdown-toggle
            px-6
            py-2.5
            bg-accent
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:text-shade-9
            hover:bg-highlight
            hover:shadow-lg
            focus:bg-highlight
            focus:shadow-lg 
            focus:outline-none focus:ring-0
            active:bg-highlight active:shadow-lg active:text-shade-9
            transition
            duration-150
            ease-in-out
            flex
            items-center
            whitespace-nowrap"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Sort Options
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512">
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </button>
          <ul
            style={sortDropDown ? { display: "block" } : { display: "none" }}
            className="
            dropdown-menu
            min-w-full
            absolute
            hidden
            bg-shade-8
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1
            m-0
            bg-clip-padding
            border-none
            "
            aria-labelledby="sort-options">
            {sortOptions.map((option, i) => (
              <li
                onClick={() => {
                  setSortNameDir(!sortNameDir);
                  setFilterVinyl(option.sort(vinyls, sortNameDir));
                  setSortDropDown(!sortDropDown);
                }}
                className="cursor-pointer"
                key={option + i}>
                <a
                  className="
                  hover:bg-shade-2
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  text-shade-1
                  hover:text-shade-9
                  ">
                  {option.method}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
