import styled from "styled-components";
import { Container } from "./styles";
import { IButtonAProps } from "./types";

const ButtonA = ({ children }: IButtonAProps) => {
  return <Container>{children}</Container>;
};

export default ButtonA;
