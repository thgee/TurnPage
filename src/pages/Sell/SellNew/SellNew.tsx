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

const SellNew = () => {
  const [grade, setGrade] = useState("상태를 선택하세요");
  const [price, setPrice] = useState("");

  const [selectedBook, setSelectedBook] = useState<
    ISearchBookAladin | undefined
  >();

  const [modalToggle, setModalToggle] = useState(true);
  console.log(selectedBook);
  return (
    <Style.Container>
      <h1 className="title">책 판매하기</h1>
      <div className="row1">
        <div className="col1">
          <div className="img-box">
            <img src={selectedBook?.cover} />
          </div>
          <Btn2
            onClick={() => {
              setModalToggle(true);
            }}
          >
            책 선택하기
          </Btn2>

          <div className="book-info-wrap">
            <div className="row1">
              <span className="title">
                {splitTitle(selectedBook?.title)?.title}
              </span>
              <span className="subTitle">
                {splitTitle(selectedBook?.title)?.subTitle}
              </span>
            </div>
            <div className="row2">{selectedBook?.author}</div>
            <div className="row3">
              <span>{selectedBook?.publisher}</span>
              <span>{convertDateFormat(selectedBook?.publicationDate)}</span>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="row1">
            <input type="text" placeholder="판매 게시글 제목" />
          </div>
          <div className="row2">
            <div className="grade-wrap">
              <span>상태</span>
              <GradeSelector setGrade={setGrade} grade={grade} />
            </div>
            <div className="price-wrap">
              <span>가격</span>
              <div className="price-box">
                <input
                  type="text"
                  placeholder="가격을 입력하세요"
                  onChange={(e) => setPrice(e.currentTarget.value)}
                  value={convertPriceComma(price)}
                />
                원
              </div>
            </div>
          </div>
          <div className="row3">
            <Btn2>취소</Btn2>
            <Btn2>판매글 등록하기</Btn2>
          </div>
        </div>
      </div>
      <div className="row2"></div>

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
