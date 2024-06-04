export interface IStore {
  salePostId: number;
  bookInfo: {
    bookId: number;
    title: string;
    subTitle: string;
    author: string;
    cover: string;
    publisher: string;
    publicationDate: string;
    rank: number;
    star: number;
  };
  title: string;
  price: number;
  grade: string;
  createdAt: string;
}
