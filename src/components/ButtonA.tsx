import styled from "styled-components";

const ButtonA = ({ children }: IButtonAProps) => {
  return <Container>{children}</Container>;
};

interface IButtonAProps {
  children: string;
}

const Container = styled.button`
  background-color: ${(p) => p.theme.btnABgColor};
  color: ${(p) => p.theme.btnATextColor};
  border-radius: 4px;
  font-weight: 600;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
`;

export default ButtonA;
