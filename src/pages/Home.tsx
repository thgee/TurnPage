import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BestSellerPreview from "../components/BestSellerPreview";
import BookListItem from "../components/BookList";
import BookList from "../components/BookList";
import { useState } from "react";

const Home = () => {
  // 친구들의 독후감 : report, 현재 판매중인 책 : sell
  const [tabState, SetTabState] = useState("report");

  return (
    <Container>
      {/* 베스트셀러 */}
      <SectionA>
        <h1 className="title">베스트 셀러</h1>

        <BestSellerContainer>
          <LeftBracketIcon />
          <BestSellerCarousel>
            {dataBooks.map((info) => (
              <BestSellerPreview bookInfo={info} />
            ))}
          </BestSellerCarousel>
          <RightBracketIcon />
        </BestSellerContainer>
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
  .title {
    font-weight: 700;
    font-size: 2rem;
  }
`;
const SectionB = styled.div``;

const LeftBracketIcon = styled(FaAngleLeft)`
  height: 50px;
  width: 50px;
  color: ${(p) => p.theme.titleTextColor};
  cursor: pointer;
  flex-shrink: 0;
`;
const RightBracketIcon = styled(FaAngleRight)`
  height: 50px;
  width: 50px;
  color: ${(p) => p.theme.titleTextColor};
  cursor: pointer;
  flex-shrink: 0;
`;
const BestSellerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BestSellerCarousel = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 340px;
  > div {
    margin: 30px;
  }
`;

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
    p.isClick ? p.theme.btnABgColor : p.theme.btnBBgColor};
  color: ${(p) => (p) =>
    p.isClick ? p.theme.btnATextColor : p.theme.btnBTextColor};
`;

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
