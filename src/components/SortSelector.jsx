const SortSelector = () => {
  const sortOptions = [
    { method: "Name" },
    { method: "Artist" },
    { method: "Popularity" },
    { method: "Price" },
  ];
  return (
    <select
      className="
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
      hover:bg-highlight
      cursor-pointer
      hover:shadow-lg
      focus:bg-highlight
      focus:shadow-lg 
      focus:outline-none focus:ring-0
      active:bg-highlight active:shadow-lg active:text-white
      transition
      duration-150
      ease-in-out
      flex
      items-center
      whitespace-nowrap">
      {sortOptions.map((option, i) => (
        <option value={option.method} key={option + i}>
          {option.method}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
