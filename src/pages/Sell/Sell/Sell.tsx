import BookList from "../../../components/BookList/BookList";
import FloatingBtn from "../../../components/FloatingBtn/FloatingBtn";
import * as Style from "./styles";

const Sell = () => {
  return (
    <Style.Container>
      <h1 className="title">판매 중인 도서 목록</h1>
      <BookList mode="sell" />
      <FloatingBtn path="/sell/new" />
    </Style.Container>
  );
};

export default Sell;
