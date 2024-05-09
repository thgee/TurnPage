export interface IBookListItemProps {
  bookInfo: {
    img: string;
    title: string;
    subTtile: string;
    author: string;
    publisher: string;
    date: string;
    grade: number;
    state: string;
    price: string;
  };
  mode: string;
}
