import styled from "styled-components";
import TabBtn from "../../components/TabBtn/TabBtn";

export const Container = styled.div``;
export const Title = styled.h1`
  font-family: ${(p) => p.theme.fontFamily.medium};
  font-size: 2rem;
  margin: 20px 0;
`;
export const Section1 = styled.section`
  padding: 10px 30px;
`;
export const Section2 = styled.section``;

export const _TabBtn = styled(TabBtn)`
  &::before {
    display: none;
  }
  margin-top: 30px;
`;
