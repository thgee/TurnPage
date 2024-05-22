import BookList from "../../components/BookList/BookList";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { searchScrollMoveState } from "../../recoil/searchScrollMoveState";
import { scroller } from "react-scroll";
import * as Style from "./styles";
import BestSellerCarousel from "../../components/BestSeller/BestSellerCarousel/BestSellerCarousel";
import { dataBooks } from "../../dummy/dummy";

const Home = () => {
  // 친구들의 독후감 : report, 현재 판매중인 책 : sell
  const [tabState, SetTabState] = useState("report");

  const [searchScrollMove, setSearchScrollMove] = useRecoilState(
    searchScrollMoveState
  );

  // search 입력 시 스크롤 이동 로직
  useEffect(() => {
    if (searchScrollMove)
      scroller.scrollTo("searchScrollMove", {
        duration: 300,
        smooth: true,
        offset: -50, // 스크롤 위치 세부조정
      });
  }, [searchScrollMove]);

  return (
    <Style.Container>
      {/* 베스트셀러 */}

      <Style.SectionA>
        <h1 className="title">베스트 셀러</h1>

        {/* carousel */}
        <BestSellerCarousel bestSellers={dataBooks} />
      </Style.SectionA>

      {/* 독후감, 판매중인책*/}
      <Style.SectionB id="searchScrollMove">
        {/* 탭 버튼 선택 */}
        <Style.TabWrap>
          <Style.Tab
            isClick={"report" === tabState}
            onClick={() => SetTabState("report")}
          >
            친구들의 독후감
          </Style.Tab>
          <Style.Tab
            isClick={"sell" === tabState}
            onClick={() => SetTabState("sell")}
          >
            현재 판매중인 책
          </Style.Tab>
        </Style.TabWrap>
        <BookList mode={tabState} />
      </Style.SectionB>
    </Style.Container>
  );
};

export default Home;
