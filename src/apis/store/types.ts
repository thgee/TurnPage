export interface IStore {
  salePostId: number;
  bookInfo: {
    bookId: number;
    title: string;
    subTitle: string;
    cover: string;
  };
  title: string;
  price: number;
  grade: string;
  createdAt: string;
}
