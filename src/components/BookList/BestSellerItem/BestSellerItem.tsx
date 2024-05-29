import { PiStarFill, PiStarBold } from "react-icons/pi";
import { BookInfoWrap, RowA, RowB } from "./styles";
import { useNavigate } from "react-router-dom";
import { IBestSeller } from "../../../apis/bestseller/types";
import Btn1 from "../../Btn1/Btn1";
import { Container } from "./styles";
import { useMediaQuery } from "react-responsive";
import { getStar } from "../../../utils/getStar";

const BestSellerItem = ({ bookInfo }: { bookInfo: IBestSeller }) => {
  const navigate = useNavigate();

  const isPc = useMediaQuery({
    query: "(min-width : 1024px)",
  });

  return (
    <Container>
      <RowA>
        <div className="img-box">
          <img
            src={bookInfo.cover}
            onClick={() => navigate(`/book-detail/${bookInfo.bookId}`)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <BookInfoWrap>
          <div className="title-wrap">
            <h1>{bookInfo.title}</h1>
            <h2>
              {isPc &&
                (bookInfo.subTitle.length > 15
                  ? bookInfo.subTitle.slice(0, 15) + "..."
                  : bookInfo.subTitle)}
            </h2>
          </div>
          <span className="author">{bookInfo.author}</span>
          <div>
            <span className="publisher">{bookInfo.publisher}</span>
            <span className="date">{bookInfo.publicationDate}</span>
          </div>
          <div className="star-wrap">{getStar(bookInfo.star)}</div>

          {/* 화면이 줄어들면 버튼이 책 정보 아래로 이동 */}
          {!isPc && (
            <RowB>
              <div className="btn-wrap">
                <Btn1>중고 판매 게시글 살펴보기</Btn1>
                <Btn1>친구들이 쓴 독후감 살펴보기</Btn1>
              </div>
            </RowB>
          )}
        </BookInfoWrap>
      </RowA>
      {isPc && (
        <RowB>
          <div className="btn-wrap">
            <Btn1>중고 판매 게시글 살펴보기</Btn1>
            <Btn1>친구들이 쓴 독후감 살펴보기</Btn1>
          </div>
        </RowB>
      )}
    </Container>
  );
};

export default BestSellerItem;
