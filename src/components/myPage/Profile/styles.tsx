import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid ${(p) => p.theme.commonColor.normalText};
  border-radius: 20px;
  padding: 16px;
  position: relative;
  display: flex;

  .edit-profile {
    position: absolute;
    right: 14px;
    top: 14px;
  }
`;

export const Col1 = styled.div``;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
