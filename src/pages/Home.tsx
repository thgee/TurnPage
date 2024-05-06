import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BestSellerPreview from "../components/BestSellerPreview";
import BookList from "../components/BookList";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // 친구들의 독후감 : report, 현재 판매중인 책 : sell
  const [tabState, SetTabState] = useState("report");

  return (
    <Container>
      {/* 베스트셀러 */}
      <SectionA>
        <h1 className="title">베스트 셀러</h1>

        {/* carousel */}
        <BestSellerCarousel bestSellers={dataBooks} />
      </SectionA>

      {/* 독후감, 판매중인책*/}
      <SectionB>
        {/* 탭 버튼 선택 */}
        <TabWrap>
          <Tab
            isClick={"report" === tabState}
            onClick={() => SetTabState("report")}
          >
            친구들의 독후감
          </Tab>
          <Tab
            isClick={"sell" === tabState}
            onClick={() => SetTabState("sell")}
          >
            현재 판매중인 책
          </Tab>
        </TabWrap>
        <BookList />
      </SectionB>
    </Container>
  );
};

export default Home;

const Container = styled.div``;

const SectionA = styled.div`
  padding: 30px;
  .title {
    font-weight: 700;
    font-size: 2rem;
  }
`;
const SectionB = styled.div``;

const TabWrap = styled.div`
  display: flex;
`;

const Tab = styled.span<{ isClick: boolean }>`
  flex-grow: 0.5;
  border-radius: 8px;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  background-color: ${(p) =>
    p.isClick
      ? p.theme.homeTab.tabActiveBgColor
      : p.theme.homeTab.tabInactiveBgColor};
  color: ${(p) => (p) =>
    p.isClick
      ? p.theme.homeTab.tabActiveTextColor
      : p.theme.tabInactiveTextColor};
`;

// ============= 베스트셀러 Carousel ====================

// 버튼 커스텀
const LeftBracketIcon = ({ className, onClick }: IBracketIconProps) => {
  return <LeftBracketIconContainer className={className} onClick={onClick} />;
};

const RightBracketIcon = ({ className, onClick }: IBracketIconProps) => {
  return <RightBracketIconContainer className={className} onClick={onClick} />;
};

interface IBracketIconProps {
  className?: string;
  onClick?: any;
}

const LeftBracketIconContainer = styled(FaAngleLeft)`
  height: 50px;
  width: 50px;
  color: ${(p) => p.theme.titleTextColor} !important;
  flex-shrink: 0;
`;
const RightBracketIconContainer = styled(FaAngleRight)`
  height: 50px;
  width: 50px;
  color: ${(p) => p.theme.titleTextColor} !important;
  flex-shrink: 0;
`;

// 캐러셀 세팅
const BestSellerCarousel = ({ bestSellers }: { bestSellers: any[] }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <RightBracketIcon />,
    prevArrow: <LeftBracketIcon />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container" style={{ margin: "50px 0" }}>
      <Slider {...settings}>
        {bestSellers.map((info) => (
          <BestSellerPreview bookInfo={info} />
        ))}
      </Slider>
    </div>
  );
};
//  ============ 더미데이터 (API 연결 후 삭제할 것) ===================

const dataBooks = [
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
  {
    img: `${process.env.PUBLIC_URL}/tmp/bookImg.svg`,
    title: "명상 살인",
    desc: "스토리보다 생활 속 명상이 핵심",
    author: "이태혁",
    date: "2024년 2월 20일",
  },
];
