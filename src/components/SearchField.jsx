import { MagnifyingGlassIcon } from "./assets";

const SearchField = ({ vinyls, filter, setInput }) => {
  const handleChange = (evt) => {
    setInput(evt.target.value);

    const matchingAlbums = vinyls.filter((album) =>
      album.name.toLowerCase().includes(evt.target.value.toLowerCase())
    );

    const matchingArtist = vinyls.filter((album) =>
      album.artist.name.toLowerCase().includes(evt.target.value.toLowerCase())
    );
    const matchingGenre = vinyls.filter((album) =>
      album.artist.genre.toLowerCase().includes(evt.target.value.toLowerCase())
    );

    const returnArray = [
      ...matchingAlbums,
      ...matchingArtist,
      ...matchingGenre,
    ];

    filter(
      returnArray.reduce((acc, item) => {
        if (acc.includes(item)) {
          return acc;
        }
        acc.push(item);
        return acc;
      }, [])
    );
  };

  return (
    <div className="md:relative flex sm:min-w-[400px] text-shade-1">
      <div className="flex items-center justify-center px-4 bg-shade-9 rounded-l">
        <MagnifyingGlassIcon twClass="w-4 fill-shade-1" />
      </div>
      <input
        onChange={handleChange}
        className="py-2 w-full bg-shade-9 outline-none rounded-r"
        name="search"
        placeholder="search for vinyl, artist, genre"
      />
    </div>
  );
};

export default SearchField;
