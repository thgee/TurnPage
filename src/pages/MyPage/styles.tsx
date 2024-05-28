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

  > .row {
    display: flex;
    flex-wrap: wrap;

    > .col1 {
      flex-grow: 1;
      margin: 0 10px;
      padding: 30px 0;
    }
    > .col2 {
      padding: 30px 0;
      margin: 0 10px;
      flex-grow: 1;
    }
  }
`;
export const Section2 = styled.section``;

export const _TabBtn = styled(TabBtn)`
  &::before {
    display: none;
  }
  margin-top: 30px;
`;
