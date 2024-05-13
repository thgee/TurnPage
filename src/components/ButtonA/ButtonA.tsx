import styled from "styled-components";
import { IButtonAProps } from "./types";
import { Container } from "./styles";

const ButtonA = ({ children, onClick }: IButtonAProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default ButtonA;
