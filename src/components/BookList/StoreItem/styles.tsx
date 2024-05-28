import styled from "styled-components";
import { PiStarBold, PiStarFill } from "react-icons/pi";

export const Container = styled.li`
  width: 100%;
  border: 1px solid ${(p) => p.theme.color.border.border2};
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  max-width: 1500px;
  margin: 30px auto;
`;

export const RowA = styled.div`
  flex-grow: 1;
  display: flex;
`;
export const RowB = styled.div`
  flex-grow: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price-wrap {
    align-items: center;
    flex-grow: 1;
    text-align: end;
    display: flex;
    justify-content: space-between;
    flex-grow: 0.3;

    // 상태랑 가격 텍스트
    > span {
      margin: 0 10px;
    }
  }

  .btn-wrap {
    margin: 20px;

    // Btn1
    > button {
      width: 100%;
      display: block;
      margin: 10px 0;
    }
  }

  // BookItem1 작아졌을 때
  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: center;

    .btn-wrap {
      margin: 20px 0px;
    }
  }
`;

export const BookInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 10px;
  justify-content: space-between;

  .title-wrap {
    display: flex;
    justify-content: space-between;
  }

  // title
  h1 {
    font-size: 1.4rem;
  }
  // subtitle
  h2 {
    align-self: end;
    flex-grow: 1;
    margin-left: 6px;
    color: #888;
  }

  .author,
  .publisher,
  .date {
    color: #888;
  }

  .star-wrap {
    display: flex;
    flex-grow: 0.6;
    align-items: center;
  }
`;
