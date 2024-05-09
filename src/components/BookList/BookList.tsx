import { dataBooks } from "../../dummy/dummy";
import BookItem1 from "./BookItem1";
import BookItem2 from "./BookItem2";
import { BookListContainer } from "./styles";

// prop으로 엔드포인트 받아서 api로 book 배열 받아온 후 사용하기
const BookList = ({ mode }: { mode: string }) => {
  return (
    <BookListContainer>
      {dataBooks.map((info, i) => {
        // 책방이나 베스트셀러에서 호출하면 버튼있는 아이템박스
        if (mode === "sell" || mode === "best")
          return <BookItem1 key={i} bookInfo={info} mode={mode} />;
        // 독후감에서 호출하면 독후감 박스
        if (mode === "report") return;
        <BookItem2 key={i} bookInfo={info} mode={mode} />;
      })}
    </BookListContainer>
  );
};

export default BookList;
