const Pagination = ({ itemsPerPage, total, setPage, currPage }) => {
  const _pages = [];
  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    _pages.push(i);
  }

  return (
    <div className="flex justify-center">
      <ul className="flex bg-shade-9 rounded-md">
        <li
          onClick={() => {
            if (currPage > 1) {
              setPage(currPage - 1);
            }
          }}>
          <a className="relative block py-1.5 px-3 border-0 bg-transparent outline-none ease-in-out duration-300 rounded text-shade-2 hover:text-shade-9 hover:bg-highlight focus:shadow-none cursor-pointer">
            prev
          </a>
        </li>

        {_pages.map((page, i) => {
          return (
            <li onClick={() => setPage(page)} key={page + i}>
              <a
                className={`relative block py-1.5 px-3 border-0 outline-none ease-in-out duration-300 rounded text-shade-2 hover:text-shade-9 hover:bg-highlight focus:shadow-none cursor-pointer ${
                  page === currPage ? "bg-accent" : ""
                }`}>
                {page}
              </a>
            </li>
          );
        })}

        <li
          onClick={() => {
            if (currPage < _pages.length) {
              setPage(currPage + 1);
            }
          }}>
          <a className="relative block py-1.5 px-3 border-0 bg-transparent outline-none ease-in-out duration-300 rounded text-shade-2 hover:text-shade-9 hover:bg-highlight focus:shadow-none cursor-pointer">
            next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
