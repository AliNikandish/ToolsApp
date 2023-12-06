import { useState } from "react";
export default function Pagination({
  pages,
  clickPageHandler,
  currentPage,
  nextHandler,
  prevHandler,
}: PaginationProps) {
  const [pagesConut] = useState(pages);
  const clickHandler = (page: number) => {
    clickPageHandler(page);
  };

  const clickPrevHandler = () => {
    if (currentPage !== 1) {
      prevHandler();
    }
  };

  const clickNextHandler = () => {
    if (currentPage !== pagesConut.length) {
      nextHandler();
    }
  };

  return (
    <nav aria-label="">
      <ul className=" flex items-center gap-x-2">
        <li className="bg-blue-500 p-1 rounded shadow text-white">
          <button
            type="submit"
            className=""
            onClick={() => clickPrevHandler()}
          >
            قبلی
          </button>
        </li>
        {pagesConut.map((page: number,index) => {
          return (
            <li
              key={index}
              className={` bg-blue-500 p-1 px-2 rounded shadow text-white ${
                currentPage === page + 1 ? "bg-gray-800" : null
              }`}
            >
              <button
              type="submit"
                className=""
                onClick={() => clickHandler(page + 1)}
              >
                {page + 1}
              </button>
            </li>
          );
        })}
        <li className="bg-blue-500 p-1 rounded shadow text-white">
          <button
          type="submit"
            className=""
            onClick={() => clickNextHandler()}
          >
            بعدی
          </button>
        </li>
      </ul>
    </nav>
  );
}
