// ==================== BookListItem =================
// <책방에서 호출, 홈에서 호출> 2가지 경우로 나뉨 -> mode prop으로 관리
// mode === home, mode === sell

import { PiStarFill, PiStarBold } from "react-icons/pi";
import ButtonA from "../ButtonA/ButtonA";
import BookInfoWrap, { BookItemContainer, RowA, RowB } from "./styles";
import { IBookListItemProps } from "./types";

const BookListItem = ({ bookInfo, mode }: IBookListItemProps) => {
  const getStar = (num: number) => {
    const stars = [];
    for (let _ = 0; _ < num; _++) {
      stars.push(<PiStarFill size={26} />);
    }

    for (let _ = 0; _ < 5 - num; _++) {
      stars.push(<PiStarBold size={26} />);
    }

    return stars;
  };

  return (
    <BookItemContainer>
      <RowA>
        <div>
          <img src={bookInfo.img} alt="책 표지" />
        </div>
        <BookInfoWrap>
          <div className="title-wrap">
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.subTtile}</h2>
          </div>
          <span className="author">{bookInfo.author}</span>
          <div>
            <span className="publisher">{bookInfo.publisher}</span>
            <span className="date">{bookInfo.date}</span>
          </div>
          <div className="star-wrap">{getStar(bookInfo.grade)}</div>
        </BookInfoWrap>
      </RowA>
      <RowB>
        <div className="price-wrap">
          <span>상태: {bookInfo.state}</span>
          <span>{bookInfo.price}원</span>
        </div>
        <div className="btn-wrap">
          {/* 홈에서 호출한 경우 */}
          {mode === "home" && (
            <>
              <ButtonA>중고 책방에서 둘러보기</ButtonA>
              <ButtonA>책 정보 상세히 보기</ButtonA>
              <ButtonA>친구가 쓴 독후감 읽어보기</ButtonA>
            </>
          )}
          {/* 책방에서 호출한 경우 */}
          {mode === "sell" && (
            <>
              <ButtonA>해당 도서 정보 살펴보기</ButtonA>
              <ButtonA>판매 게시글 상세히 보기</ButtonA>
            </>
          )}
        </div>
      </RowB>
    </BookItemContainer>
  );
};

export default BookListItem;
