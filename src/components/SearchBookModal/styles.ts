import styled from "styled-components";

export const Container = styled.div`
  min-height: 400px;
  max-height: 70vh;
  height: fit-content;
  overflow-y: scroll;

  .search-box {
    margin: 0 auto;
    margin-bottom: 20px;
    position: sticky;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(p) => p.theme.color.icon.icon2};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 10px;
  }

  ul {
    margin-right: 30px;
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
    font-family: ${(p) => p.theme.fontFamily.medium};
  }
`;
