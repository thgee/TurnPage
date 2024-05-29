import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as Style from "./styles";
import { searchScrollMoveState } from "../../recoil/searchScrollMoveState";
import { accessTokenState } from "../../recoil/accessTokenState";
import { useEffect } from "react";

const Header = () => {
  // 현재 보고있는 페이지의 Link 버튼을 굵게 만들기 위함
  const location = useLocation();
  const isVisit = (path: string) => location.pathname === path;

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
        <Style.Link_ to="/" isVisit={isVisit("/")}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
            alt="logo"
            width="38px"
          />
        </Style.Link_>

        <Style.Link_ to="best" isVisit={isVisit("/best")}>
          베스트셀러
        </Style.Link_>
        <Style.Link_ to="#" isVisit={isVisit("/report")}>
          독후감
        </Style.Link_>
        <Style.Link_ to="store" isVisit={isVisit("/store")}>
          책방
        </Style.Link_>
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
        <Style.Link_ to="#" isVisit={isVisit("/sell")}>
          책 판매하기
        </Style.Link_>

        {accessToken ? (
          <>
            <Style.Link_ to="mypage" isVisit={isVisit("/mypage")}>
              마이페이지
            </Style.Link_>
            <span className="logout" onClick={handleLogout}>
              로그아웃
            </span>
          </>
        ) : (
          <Style.Link_
            to="login"
            state={{ prePagePath: pathname }}
            isVisit={isVisit("/login")}
          >
            로그인
          </Style.Link_>
        )}
      </Style.RowC>
    </Style.Container>
  );
};

export default Header;
