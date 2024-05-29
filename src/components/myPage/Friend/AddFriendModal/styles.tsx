import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  .row2 {
    display: flex;
    margin-top: 10px;
    align-items: center;

    > input {
      border-radius: 5px;
      padding: 8px 12px;
      flex-grow: 1;
      border: 2px solid ${(p) => p.theme.color.border.border2};
      margin-right: 10px;
    }
  }
`;
