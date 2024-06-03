import BookList from "../../components/BookList/BookList";
import * as Style from "./styles";

const Report = () => {
  return (
    <Style.Container>
      <h1 className="title">친구들의 독후감</h1>

      <BookList mode="report" />
    </Style.Container>
  );
};

export default Report;
