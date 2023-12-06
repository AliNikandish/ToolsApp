type PaginationProps = {
  pages: number[];
  clickPageHandler: (page: number) => void;
  currentPage: number;
  nextHandler: () => void;
  prevHandler: () => void;
};

type meme = {
  box_count: number;
  captions: number;
  height: number;
  id: string;
  name: string;
  url: string;
  width: number;
};

type CardsProps={
    meme:meme[]
  }

type CardProps={
    meme:meme
  }