import { MagnifyingGlassIcon } from "./assets";

const SearchField = () => {
  return (
    <div className="md:relative flex sm:min-w-[400px] text-shade-1">
      <div className="flex items-center justify-center px-4 bg-shade-9">
        <MagnifyingGlassIcon twClass="w-4 fill-shade-1" />
      </div>
      <input
        className="py-2 w-full bg-shade-9 outline-none"
        name="search"
        placeholder="search vinyls"
      />
    </div>
  );
};

export default SearchField;
