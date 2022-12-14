const Pagination = ({ itemsPerPage, total, setPage, currPage }) => {
  const _pages = [];
  for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
    _pages.push(i);
  }

  return (
    <div className="flex justify-center mb-5">
      <ul className="flex bg-shade-9 rounded-md">
        <li
          onClick={() => {
            if (currPage > 1) {
              setPage(currPage - 1);
            }
          }}>
          <a
            className="relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-shade-2  hover:bg-accent focus:shadow-none"
            href="#">
            prev
          </a>
        </li>

        {_pages.map((page, i) => {
          return (
            <li onClick={() => setPage(page)} key={page + i}>
              <a
                className={`relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-shade-2  hover:bg-accent focus:shadow-none ${
                  page === currPage ? "bg-accent" : ""
                }`}
                href="#">
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
          <a
            className="relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-shade-2  hover:bg-accent focus:shadow-none"
            href="#">
            next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
