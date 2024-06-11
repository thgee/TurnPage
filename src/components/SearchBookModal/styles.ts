import styled from "styled-components";

export const Container = styled.div`
  .search-box {
    margin: 0 auto;
  }
`;

export const BookItem = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.color.border.border3};
  color: ${(p) => p.theme.color.text.text2};
  padding: 12px 0;
  cursor: pointer;
  margin-top: 2px;

  &:hover {
    background-color: ${(p) => p.theme.color.bg.bg2};
  }
`;
