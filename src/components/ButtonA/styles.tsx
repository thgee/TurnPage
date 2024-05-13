import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(p) => p.theme.btnColor.btn1Bg};
  color: ${(p) => p.theme.btnColor.btn1Text};
  border-radius: 4px;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
`;
