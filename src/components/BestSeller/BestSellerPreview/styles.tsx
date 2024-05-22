import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 330px;
`;
export const BookImgBox = styled.div``;
export const BookInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;

  > .title {
    font-family: ${(p) => p.theme.fontFamily.medium};
  }
`;
