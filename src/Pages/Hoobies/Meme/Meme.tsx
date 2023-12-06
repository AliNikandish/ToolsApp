import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Cards from "./Crads";

function Meme() {
  const [allMeme, setAllMeme] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((response) => setAllMeme(response.data.memes));
  }, []);

  const clickPageHandler = (page: number) => {
    setCurrentPage(page);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => {
      return prev - 1;
    });
  };

  const nextHandler = () => {
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  const itemCount = 12;
  // const pageCount=allMeme.length/itemCount
  const lastIndex = itemCount * currentPage;
  const firstIndex = lastIndex - itemCount;
  let itemToShow = allMeme.slice(firstIndex, lastIndex);
  let pages = Array.from(Array(9).keys());

  return (
    <>
      <div className="container mx-auto flex justify-center items-center font-VazirMedium ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <Cards meme={itemToShow} />
        </div>
      </div>
      {allMeme.length && (
        <div className="container mx-auto flex justify-center items-center font-VazirMedium ">
          <Pagination
            pages={pages}
            clickPageHandler={clickPageHandler}
            currentPage={currentPage}
            prevHandler={prevHandler}
            nextHandler={nextHandler}
          />
        </div>
      )}
    </>
  );
}

export default Meme;
