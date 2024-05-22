import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.header`
  background-color: ${(p) => p.theme.commonColor.point};
  height: 56px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  position: sticky;
  top: 0px;
  left: 0;
  z-index: 10;

  .link {
    cursor: pointer;
    color: ${(p) => p.theme.commonColor.titleText};
    &:hover {
      color: ${(p) => p.theme.commonColor.normalText};
    }
  }
`;

// 헤더 3등분 flex prototype
export const RowFlexProto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RowA = styled(RowFlexProto)`
  flex-grow: 0.3;
  flex-shrink: 0;
`;
export const RowB = styled(RowFlexProto)`
  flex-grow: 0.4;
`;

export const RowC = styled(RowFlexProto)`
  flex-grow: 0.3;
  flex-shrink: 0;
`;

// 검색창 박스
export const Search = styled.div`
  border-radius: 16px;
  background-color: ${(p) => p.theme.commonColor.bg};
  width: 90%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: inset 2px 2px 5px -3px rgb(10, 10, 10);

  // 검색하는 부분
  input {
    background-color: ${(p) => p.theme.commonColor.bg};
    border: none;
    flex-grow: 1;
    margin: 0 10px;
    outline: none;
    width: 100%;
  }
`;

// 돋보기
export const SearchIcon = styled(FaSearch)`
  flex-shrink: 0;
`;
