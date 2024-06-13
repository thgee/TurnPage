import styled from "styled-components";
import { IBtn2Props } from "./types";
import { Container } from "./styles";

// 수정, 등록, 삭제 회색버튼
const Btn2 = ({ children, onClick, className }: IBtn2Props) => {
  return (
    <Container className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Btn2;
