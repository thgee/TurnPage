import styled from "styled-components";
import { StyledTextArea } from "../../../styles/StyledTextArea";

export const Container = styled.div`
  .price-box {
    background-color: ${(p) => p.theme.color.bg.bg2};
    font-family: ${(p) => p.theme.fontFamily.medium};
    width: fit-content;
    border-radius: 10px;
    padding-right: 8px;
    border: 1px solid ${(p) => p.theme.color.btn.bg2};

    color: ${(p) => p.theme.color.text.text2};
    input {
      padding: 8px;
      border: none;
      background: none;
      width: 130px;
      cursor: pointer;
      font-family: ${(p) => p.theme.fontFamily.medium};
      color: ${(p) => p.theme.color.text.text2};
    }
  }
`;

export const TextArea = styled(StyledTextArea)`
  width: 80%;
  height: 500px;
`;
