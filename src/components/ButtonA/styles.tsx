import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(p) => p.theme.btnABgColor};
  color: ${(p) => p.theme.btnATextColor};
  border-radius: 4px;
  font-weight: 600;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
`;
