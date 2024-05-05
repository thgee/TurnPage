import styled from "styled-components";
import { PiStarBold, PiStarFill } from "react-icons/pi";
import ButtonA from "./ButtonA";
// ==================== BookList =================

const BookList = () => {
  return (
    <BookListContainer>
      {dataBooks.map((info) => (
        <BookListItem bookInfo={info} />
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

const BookListItem = ({ bookInfo }: IBookInfo) => {
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
          <div className="star-wrap">
            <PiStarFill size={26} />
            <PiStarBold size={26} />
          </div>
        </BookInfoWrap>
      </RowA>

      <RowB>
        <div className="price-wrap">
          <span>상태: {bookInfo.state}</span>
          <span>{bookInfo.price}원</span>
        </div>
        <div className="btn-wrap">
          <ButtonA>해당 도서 정보 살펴보기</ButtonA>
          <ButtonA>판매 게시글 상세히 보기</ButtonA>
        </div>
      </RowB>
    </BookItemContainer>
  );
};

const RowA = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 20px;
`;
const RowB = styled.div`
  flex-grow: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price-wrap {
    flex-grow: 1;
    text-align: end;
    display: flex;
    justify-content: space-between;
    flex-grow: 0.3;
  }

  .btn-wrap {
    // ButtonA
    padding: 20px;
    > button {
      display: block;
      margin: 10px 0;
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
    margin-top: 24px;
  }
`;

interface IBookInfo {
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
