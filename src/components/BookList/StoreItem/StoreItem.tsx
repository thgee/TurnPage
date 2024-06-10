import { PiStarFill, PiStarBold } from "react-icons/pi";
import { ISellItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../Btn1/Btn1";
import * as style from "./styles";
import { IStore } from "../../../apis/store/types";
import { getStar } from "../../../utils/getStar";

// 책방, 구매내역에서 띄울 아이템
const StoreItem = ({ storeInfo }: { storeInfo: IStore }) => {
  const navigate = useNavigate();

  return (
    <style.Container>
      <style.RowA>
        <div>
          <img src={storeInfo.bookInfo.cover} />
        </div>
        <style.BookInfoWrap>
          <div className="title-wrap">
            <h1>{storeInfo.bookInfo.title}</h1>
            <h2>{storeInfo.bookInfo.subTitle}</h2>
          </div>
          <span className="author">{storeInfo.bookInfo.author}</span>
          <div>
            <span className="publisher">{storeInfo.bookInfo.publisher}</span>
            <span className="date">{storeInfo.bookInfo.publicationDate}</span>
          </div>
          <div className="star-wrap">{getStar(storeInfo.bookInfo.star)}</div>
        </style.BookInfoWrap>
      </style.RowA>
      <style.RowB>
        <div className="price-wrap">
          <span>상태: {storeInfo?.grade}</span>
          <span>{storeInfo?.price}원</span>
        </div>
        <div className="btn-wrap">
          <Btn1 onClick={() => navigate(`/bookDetail/${storeInfo.title}`)}>
            해당 도서 정보 살펴보기
          </Btn1>
          <Btn1>판매 게시글 상세히 보기</Btn1>
        </div>
      </style.RowB>
    </style.Container>
  );
};

export default StoreItem;
