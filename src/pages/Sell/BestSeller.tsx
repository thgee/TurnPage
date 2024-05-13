import BookList from "../../components/BookList/BookList";
import * as Style from "./styles";

const Sell = () => {
  return (
    <Style.Container>
      <h1 className="title">판매 중인 도서 목록</h1>
      <BookList mode="sell" />
    </Style.Container>
  );
};

export default Sell;
