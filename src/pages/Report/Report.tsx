import { Link } from "react-router-dom";
import BookList from "../../components/BookList/BookList";
import * as Style from "./styles";

const Report = () => {
  return (
    <Style.Container>
      <h1 className="title">친구들의 독후감</h1>
      <BookList mode="report" />

      <Link to="/report/write">독후감 작성</Link>
    </Style.Container>
  );
};

export default Report;
