import { useNavigate } from "react-router-dom";
import { IBestSeller } from "../../../apis/bestseller/types";
import * as Style from "./styles";

const BestSellerPreview = ({ bookInfo }: { bookInfo: IBestSeller }) => {
  const navigate = useNavigate();
  return (
    <Style.Container>
      <Style.BookImgBox
        onClick={() => {
          navigate(`/bookDetail/${bookInfo.bookId}`);
        }}
      >
        <img src={bookInfo.cover} height={250} />
      </Style.BookImgBox>
      <Style.BookInfoWrap>
        <h1 className="title">
          {/* 제목이 20자 이상이면 ...으로 줄임 */}
          {bookInfo.title.length > 20
            ? bookInfo.title.slice(0, 20) + "..."
            : bookInfo.title}
        </h1>
        <span>{bookInfo.author}</span>
        <span>{bookInfo.publicationDate}</span>
      </Style.BookInfoWrap>
    </Style.Container>
  );
};

export default BestSellerPreview;
