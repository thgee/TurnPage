import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Style from "./styles";
import { searchScrollMoveState } from "../../recoil/searchScrollMoveState";
import { accessTokenState } from "../../recoil/accessTokenState";
import { useEffect } from "react";

const Header = () => {
  const [searchScrollMove, setSearchScrollMove] = useRecoilState(
    searchScrollMoveState
  );
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken("");
  };

  // 현재 url을 받아옴
  const { pathname } = useLocation();
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 한 글자라도 입력하면 bestSeller를 숨겨야 함
    if (e.target.value.length > 0) setSearchScrollMove(true);
    else setSearchScrollMove(false);
  };

  return (
    <Style.Container>
      {/* 검색창 왼쪽 */}
      <Style.RowA>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt="logo"
            width="38px"
          />
        </Link>
        <Link className="link" to="best">
          베스트셀러
        </Link>
        <Link className="link" to="#">
          독후감
        </Link>
        <Link className="link" to="sell">
          책방
        </Link>
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
        <Link className="link" to="#">
          책 판매하기
        </Link>

        {accessToken ? (
          <>
            <Link className="link" to="#">
              마이페이지
            </Link>
            <span className="link" onClick={handleLogout}>
              로그아웃
            </span>
          </>
        ) : (
          <Link className="link" to="login" state={{ prePagePath: pathname }}>
            로그인
          </Link>
        )}
      </Style.RowC>
    </Style.Container>
  );
};

export default Header;
