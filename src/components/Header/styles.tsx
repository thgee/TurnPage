import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: ${(p) => p.theme.color.bg.bg3};
  height: 56px;
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.color.border.border1};
  display: flex;
  position: sticky;
  top: 0px;
  left: 0;
  z-index: 10;
`;

export const Link_ = styled(Link)<{ isVisit: boolean }>`
  cursor: pointer;
  color: ${(p) => p.theme.color.text.text2};

  // 현재 방문중인 페이지는 굵게 표시
  font-family: ${(p) => p.isVisit && p.theme.fontFamily.medium};
  color: ${(p) => p.isVisit && p.theme.color.text.text1};

  &:hover {
    color: ${(p) => p.theme.color.text.text1};
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
  background-color: ${(p) => p.theme.color.bg.bg4};
  width: 90%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: inset 2px 2px 5px -3px rgb(10, 10, 10);

  // 검색하는 부분
  input {
    background-color: ${(p) => p.theme.color.bg.bg4};
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
