import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Style from "./styles";
import { searchScrollMoveState } from "../../atoms";

const Header = () => {
  const [searchScrollMove, setSearchScrollMove] = useRecoilState(
    searchScrollMoveState
  );

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 한 글자라도 입력하면 bestSeller를 숨겨야 함
    if (e.target.value.length > 0) setSearchScrollMove(true);
    else setSearchScrollMove(false);
  };

  return (
    <Style.Container>
      {/* 검색창 왼쪽 */}
      <Style.RowA>
        <Link to="#">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt="logo"
            width="38px"
          />
        </Link>
        <Link to="#">베스트셀러</Link>
        <Link to="#">독후감</Link>
        <Link to="#">책방</Link>
      </Style.RowA>

      {/* 검색창 */}
      <Style.RowB>
        <Style.Search>
          <input
            type="text"
            placeholder="구매하고 싶은 책을 입력해 주세요"
            onChange={handleSearchInput}
          />
          <Style.SearchIcon />
        </Style.Search>
      </Style.RowB>

      {/* 검색창 오른쪽 */}
      <Style.RowC>
        <Link to="#">책 판매하기</Link>
        <Link to="#">마이페이지</Link>
        <Link to="login">로그인</Link>
      </Style.RowC>
    </Style.Container>
  );
};

export default Header;
