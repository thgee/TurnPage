import { Link, useParams } from "react-router-dom";
import * as style from "./styles";
import { useQuery } from "@tanstack/react-query";
import { apiGetBookDetail } from "../../apis/bookDetail/apiGetBookDetail";
import { getStar } from "../../utils/getStar";
import BookInfo from "../../components/bookDetail/BookInfo/BookInfo";
import Review from "../../components/bookDetail/Review/Review";

const BookDetail = () => {
  const { bookId } = useParams();

  return (
    <style.Container>
      <BookInfo bookId={Number(bookId)} />
      <Review bookId={Number(bookId)} />
    </style.Container>
  );
};

export default BookDetail;
