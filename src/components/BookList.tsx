import styled from "styled-components";
import { PiStarBold, PiStarFill } from "react-icons/pi";
import ButtonA from "./ButtonA";

// ==================== BookList =================
// prop으로 엔드포인트 받아서 api로 book 배열 받아온 후 사용하기

const BookList = () => {
  return (
    <BookListContainer>
      {dataBooks.map((info) => (
        <BookListItem bookInfo={info} mode="home" />
      ))}
    </BookListContainer>
  );
};

export default BookList;

const BookListContainer = styled.ul`
  width: 80%;
  margin: 0 auto;
`;

// ==================== BookListItem =================
// <책방에서 호출, 홈에서 호출> 2가지 경우로 나뉨 -> mode prop으로 관리
// mode === home, mode === sell

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

const RowA = styled.div`
  flex-grow: 1;
  display: flex;
`;
const RowB = styled.div`
  flex-grow: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price-wrap {
    align-items: center;
    flex-grow: 1;
    text-align: end;
    display: flex;
    justify-content: space-between;
    flex-grow: 0.3;

    // 상태랑 가격 텍스트
    > span {
      margin: 0 10px;
    }
  }

  .btn-wrap {
    margin: 20px;

    // ButtonA
    > button {
      width: 100%;
      display: block;
      margin: 10px 0;
    }
  }

  // BookListItem 작아졌을 때
  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;

    .btn-wrap {
      margin: 20px 0px;
    }
  }
`;

const BookItemContainer = styled.li`
  width: 100%;
  border: 1px solid ${(p) => p.theme.titleTextColor};
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  max-width: 1500px;
  margin: 30px auto;
`;

const BookInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  justify-content: space-between;

  .title-wrap {
    display: flex;
    justify-content: space-between;
  }

  // title
  h1 {
    font-weight: 500;
    font-size: 1.4rem;
  }
  // subtitle
  h2 {
    align-self: end;
    flex-grow: 1;
    margin-left: 6px;
    color: #888;
  }

  .author,
  .publisher,
  .date {
    color: #888;
  }

  .star-wrap {
    display: flex;
    flex-grow: 0.6;
    align-items: center;
  }
`;

interface IBookListItemProps {
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

//  ============ 더미데이터 (API 연결 후 삭제할 것) ===================

const dataBooks = [
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    subTtile: "부제",
    author: "이태혁",
    publisher: "문학동네",
    date: "2024년 2월 20일",
    grade: 3,
    state: "최상",
    price: "9800",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    subTtile: "부제",
    author: "이태혁",
    publisher: "문학동네",
    date: "2024년 2월 20일",
    grade: 3,
    state: "최상",
    price: "9800",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    subTtile: "부제",
    author: "이태혁",
    publisher: "문학동네",
    date: "2024년 2월 20일",
    grade: 3,
    state: "최상",
    price: "9800",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    subTtile: "부제",
    author: "이태혁",
    publisher: "문학동네",
    date: "2024년 2월 20일",
    grade: 3,
    state: "최상",
    price: "9800",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    subTtile: "부제",
    author: "이태혁",
    publisher: "문학동네",
    date: "2024년 2월 20일",
    grade: 3,
    state: "최상",
    price: "9800",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    subTtile: "부제",
    author: "이태혁",
    publisher: "문학동네",
    date: "2024년 2월 20일",
    grade: 3,
    state: "최상",
    price: "9800",
  },
];
