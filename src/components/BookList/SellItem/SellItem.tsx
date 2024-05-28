import { PiStarFill, PiStarBold } from "react-icons/pi";
import { ISellItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { BookInfoWrap, RowA, RowB } from "./styles";
import { Container } from "../styles";
import Btn1 from "../../Btn1/Btn1";

// 책방 리스트에 띄울 아이템 박스
const SellItem = ({ bookInfo }: ISellItemProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <RowA>
        <div>
          <img src={bookInfo.img} />
        </div>
        <BookInfoWrap>
          <div className="title-wrap">
            <h1>{bookInfo.title}</h1>
            <h2>{bookInfo.subTtile}</h2>
          </div>
          <span className="author">{bookInfo.author}</span>
          <div>
            <span className="publisher">{bookInfo.publisher}</span>
            <span className="date">{bookInfo.date}</span>
          </div>
          <div className="star-wrap">{getStar(bookInfo.grade)}</div>
        </BookInfoWrap>
      </RowA>
      <RowB>
        <div className="price-wrap">
          <span>상태: {bookInfo?.state}</span>
          <span>{bookInfo?.price}원</span>
        </div>
        <div className="btn-wrap">
          <Btn1 onClick={() => navigate(`/bookDetail/${bookInfo.title}`)}>
            해당 도서 정보 살펴보기
          </Btn1>
          <Btn1>판매 게시글 상세히 보기</Btn1>
        </div>
      </RowB>
    </Container>
  );
};

export default SellItem;

const getStar = (num: number) => {
  const stars = [];
  for (let _ = 0; _ < num; _++) {
    stars.push(<PiStarFill size={26} />);
  }

  for (let _ = 0; _ < 5 - num; _++) {
    stars.push(<PiStarBold size={26} />);
  }

  return stars;
};
