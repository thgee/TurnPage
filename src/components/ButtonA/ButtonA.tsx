import styled from "styled-components";
import { IButtonAProps } from "./types";
import { Container } from "./styles";

const ButtonA = ({ children }: IButtonAProps) => {
  return <Container>{children}</Container>;
};

export default ButtonA;
