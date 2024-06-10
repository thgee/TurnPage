import { PiStarFill, PiStarBold } from "react-icons/pi";
import { ISellItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import Btn1 from "../../Btn1/Btn1";
import * as style from "./styles";
import { IStore } from "../../../apis/store/types";
import { getStar } from "../../../utils/getStar";
import { convertPriceComma } from "../../../utils/convertPriceComma";
import { shortenText } from "../../../utils/shortenText";
import { useMediaQuery } from "react-responsive";

// 책방, 구매내역에서 띄울 아이템
const StoreItem = ({ storeInfo }: { storeInfo: IStore }) => {
  const navigate = useNavigate();

  return (
    <style.Container>
      <div className="img-box">
        <img src={storeInfo.bookInfo.cover} />
      </div>

      <div className="r-col">
        <style.Col1>
          <div className="title-wrap">
            <h1 className="title">{shortenText(storeInfo.title, 34)}</h1>
            <style.ColorBoxGrade>{storeInfo?.grade}</style.ColorBoxGrade>
          </div>

          <div className="sub-text-wrap">
            <div>{storeInfo.createdAt}</div>
            <div>{shortenText(storeInfo.bookInfo.title, 20)}</div>
          </div>

          <style.ColorBoxPrice>
            {convertPriceComma(storeInfo?.price)}원
          </style.ColorBoxPrice>
        </style.Col1>
        <style.Col2>
          <div className="btn-wrap">
            <Btn1
              onClick={() =>
                navigate(`/book-detail/${storeInfo.bookInfo.bookId}`)
              }
            >
              해당 도서 정보 살펴보기
            </Btn1>
            <Btn1>판매 게시글 상세히 보기</Btn1>
          </div>
        </style.Col2>
      </div>
    </style.Container>
  );
};

export default StoreItem;
