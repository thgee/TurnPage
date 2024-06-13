import styled from "styled-components";
import { IBtn1Props } from "./types";
import { Container } from "./styles";

// bookItem 안에 있는 navigate 버튼
const Btn1 = ({ children, onClick }: IBtn1Props) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Btn1;
