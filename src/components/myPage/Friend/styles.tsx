import ReactModal from "react-modal";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 20px;
  border: 2px solid ${(p) => p.theme.color.border.border2};
  padding: 22px;
  color: ${(p) => p.theme.color.text.text2};
  font-family: ${(p) => p.theme.fontFamily.medium};
  height: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 1px solid ${(p) => p.theme.color.border.border2};
  padding-bottom: 8px;
  margin-bottom: 14px;

  > .row1 {
    display: flex;
    flex-grow: 1;
    > span {
      margin: 0 8px;
    }
  }
  > .add-friend {
    padding: 9px 14px;
    background-color: ${(p) => p.theme.color.btn.bg1};
    color: ${(p) => p.theme.color.btn.text1};
    outline: none;
    border: none;
    border-radius: 5px;
    font-family: ${(p) => p.theme.fontFamily.light};
  }
`;
export const List = styled.ul``;
