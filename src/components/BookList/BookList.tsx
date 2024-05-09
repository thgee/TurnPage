import BookListItem from "./BookListItem";
import { BookListContainer } from "./styles";

// prop으로 엔드포인트 받아서 api로 book 배열 받아온 후 사용하기
const BookList = () => {
  return (
    <BookListContainer>
      {dataBooks.map((info, i) => (
        <BookListItem key={i} bookInfo={info} mode="home" />
      ))}
    </BookListContainer>
  );
};

export default BookList;

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
