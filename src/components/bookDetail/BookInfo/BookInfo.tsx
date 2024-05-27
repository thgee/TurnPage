import { useQuery } from "@tanstack/react-query";
import { apiGetBookDetail } from "../../../apis/bookDetail/apiGetBookDetail";
import * as style from "./styles";
import { getStar } from "../../../utils/getStar";
import { Link } from "react-router-dom";

const BookInfo = ({ bookId }: IBookInfoProps) => {
  const { isLoading, data: bookInfo } = useQuery({
    queryKey: ["bookDetail"],
    queryFn: () => apiGetBookDetail(Number(bookId)),
  });

  return (
    <style.Container>
      <style.TitleWrap>
        <h1>{bookInfo?.title}</h1>
        <h2>{bookInfo?.subTitle}</h2>
      </style.TitleWrap>

      <style.InfoWrap>
        <div className="col col1">
          <div className="row1">
            <h1>{bookInfo?.author}</h1>
            <h1>
              {bookInfo?.publisher} {bookInfo?.publicationDate}
            </h1>
          </div>

          <div className="row2">
            <div>
              <span>{getStar(Number(bookInfo?.star))}</span>
              <span className="score">{bookInfo?.star.toFixed(1)}</span>
            </div>
            <Link to="#">다른 독자들의 리뷰 둘러보기</Link>
          </div>
        </div>
        <div className="col col2">
          <img src={bookInfo?.cover} height={300} />
          <Link to="#">중고 판매 글 확인하러 가기</Link>
        </div>
        <div className="col col3">
          <h1>책 소개</h1>
          <p className="desc">{bookInfo?.description}</p>
        </div>
      </style.InfoWrap>
    </style.Container>
  );
};

export default BookInfo;

interface IBookInfoProps {
  bookId: number;
}
