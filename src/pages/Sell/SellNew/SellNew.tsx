import { useState } from "react";
import BookList from "../../../components/BookList/BookList";
import * as Style from "../Sell/styles";
import SearchBookModal from "../../../components/SearchBookModal/SearchBookModal";

const SellNew = () => {
  const [modalToggle, setModalToggle] = useState(true);
  return (
    <Style.Container>
      <h1 className="title">책 판매하기</h1>
      <SearchBookModal
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
    </Style.Container>
  );
};

export default SellNew;
