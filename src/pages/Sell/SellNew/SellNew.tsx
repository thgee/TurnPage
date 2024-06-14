import { useState } from "react";
import BookList from "../../../components/BookList/BookList";
import * as Style from "./styles";
import SearchBookModal from "../../../components/SearchBookModal/SearchBookModal";
import { ISearchBookAladin } from "../../../apis/aladinOpenAPI/types";
import { splitTitle } from "../../../utils/splitTitle";
import { convertDateFormat } from "../../../utils/convertDateFormat";
import Btn2 from "../../../components/buttons/Btn2/Btn2";
import GradeSelector from "./GradeSelector/GradeSelector";
import { convertPriceComma } from "../../../utils/convertPriceComma";
import { StyledTextArea } from "../../../styles/StyledTextArea";

const SellNew = () => {
  const [grade, setGrade] = useState("-");
  const [price, setPrice] = useState("");

  const [selectedBook, setSelectedBook] = useState<
    ISearchBookAladin | undefined
  >();

  const [modalToggle, setModalToggle] = useState(true);
  return (
    <Style.Container>
      <h1 className="title">도서 판매하기</h1>
      <Style.Section1>
        <div className="s1-col1">
          <div className="img-box">
            <img
              src={selectedBook?.cover}
              onClick={() => {
                setModalToggle(true);
              }}
            />
            <Btn2
              onClick={() => {
                setModalToggle(true);
              }}
            >
              책 선택하기
            </Btn2>
          </div>
          <div className="book-info-wrap">
            <li className="title-wrap">
              <span className="title">
                {splitTitle(selectedBook?.title)?.title}
              </span>
              <span className="subTitle">
                {splitTitle(selectedBook?.title)?.subTitle}
              </span>
            </li>
            <li>저자 : {selectedBook?.author}</li>
            <li>출판사 : {selectedBook?.publisher}</li>
            <li>출판일 : {convertDateFormat(selectedBook?.publicationDate)}</li>
          </div>
        </div>
        <div className="s1-col2">
          <div className="row1">
            <StyledTextArea style={{ cursor: "pointer" }}>
              <input type="text" placeholder="판매 게시글 제목" />
            </StyledTextArea>
          </div>
          <div className="row2">
            <div className="grade-wrap">
              <span className="label">상태</span>
              <GradeSelector setGrade={setGrade} grade={grade} />
            </div>
            <div className="price-wrap">
              <span className="label">가격</span>
              <div className="price-box">
                <input
                  type="text"
                  placeholder="가격을 입력하세요"
                  onChange={(e) => setPrice(e.currentTarget.value)}
                  value={convertPriceComma(price)}
                />{" "}
                원
              </div>
            </div>
          </div>
          <div className="row3">
            <Btn2>판매글 등록하기</Btn2>
            <Btn2>취소</Btn2>
          </div>
        </div>
      </Style.Section1>
      <Style.Section2>
        <StyledTextArea style={{ height: 300 }}>
          <textarea placeholder="도서에 대한 자세한 설명을 작성해주세요." />
        </StyledTextArea>
      </Style.Section2>
      {/* 책 검색 모달 */}
      <SearchBookModal
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        setSelectedBook={setSelectedBook}
      />
    </Style.Container>
  );
};

export default SellNew;
