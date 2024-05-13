import { PiStarFill, PiStarBold } from "react-icons/pi";
import ButtonA from "../ButtonA/ButtonA";
import BookInfoWrap, { BookItemContainer, RowA, RowB } from "./styles";
import { IBookItem1Props } from "./types";
import { useNavigate } from "react-router-dom";

// 가격, 버튼 존재하는 아이템 박스
// <베스트셀러에서 호출, 홈->판매중인 책에서 호출> 2가지 경우로 나뉨 -> mode prop으로 관리
// mode === best, mode === sell
const BookItem1 = ({ bookInfo, mode }: IBookItem1Props) => {
  const navigate = useNavigate();

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
          {mode === "best" && (
            <>
              <ButtonA>중고 판매 게시글 살펴보기</ButtonA>
              <ButtonA>친구들이 쓴 독후감 살펴보기</ButtonA>
            </>
          )}
          {/* 책방에서 호출한 경우 */}
          {mode === "sell" && (
            <>
              <ButtonA
                onClick={() => navigate(`/bookDetail/${bookInfo.title}`)}
              >
                해당 도서 정보 살펴보기
              </ButtonA>
              <ButtonA>판매 게시글 상세히 보기</ButtonA>
            </>
          )}
        </div>
      </RowB>
    </BookItemContainer>
  );
};

export default BookItem1;
