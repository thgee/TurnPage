import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      {/* 검색창 왼쪽 */}
      <RowA>
        <Link to="#">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt="logo"
            width="38px"
          />
        </Link>
        <Link to="#">도서</Link>
        <Link to="#">독후감</Link>
        <Link to="#">책방</Link>
      </RowA>

      {/* 검색창 */}
      <RowB>
        <Search>
          <input type="text" placeholder="구매하고 싶은 책을 입력해 주세요" />
          <SearchIcon />
        </Search>
      </RowB>

      {/* 검색창 오른쪽 */}
      <RowC>
        <Link to="#">책 판매하기</Link>
        <Link to="#">마이페이지</Link>
        <Link to="#">로그인</Link>
      </RowC>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: ${(p) => p.theme.pointColor};
  height: 56px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
`;

// 헤더 3등분 flex 원형
const RowFlexProto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RowA = styled(RowFlexProto)`
  flex-grow: 0.3;
  flex-shrink: 0;
`;
const RowB = styled(RowFlexProto)`
  flex-grow: 0.4;
`;

const RowC = styled(RowFlexProto)`
  flex-grow: 0.3;
  flex-shrink: 0;
`;

// 검색창 박스
const Search = styled.div`
  border-radius: 20px;
  background-color: ${(p) => p.theme.bgColor};
  width: 90%;
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;

  // 검색하는 부분
  input {
    background-color: ${(p) => p.theme.bgColor};
    border: none;
    flex-grow: 1;
    margin: 0 10px;
    outline: none;
    width: 100%;
  }
`;

// 돋보기
const SearchIcon = styled(FaSearch)`
  margin-right: 20px;
  flex-shrink: 0;
`;
