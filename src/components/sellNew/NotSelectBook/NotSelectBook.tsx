import Btn2 from "../../buttons/Btn2/Btn2";
import * as style from "./styles";

const NotSelectBook = ({ setModalToggle }: INotSelectBookProps) => {
  return (
    <style.Container>
      <img
        src={`${process.env.PUBLIC_URL}/assets/manyBooks.png`}
        height={300}
        onClick={() => {
          setModalToggle(true);
        }}
        style={{ cursor: "pointer" }}
      />
      <Btn2
        type="button"
        onClick={() => {
          setModalToggle(true);
        }}
        className="btn"
      >
        판매할 책을 선택해주세요
      </Btn2>
    </style.Container>
  );
};

export default NotSelectBook;

interface INotSelectBookProps {
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
