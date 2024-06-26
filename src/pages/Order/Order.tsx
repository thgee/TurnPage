import { Navigate, useLocation } from "react-router-dom";
import { ISellDetail } from "../../apis/sell/apiGetSellDetail/types";
import Btn2 from "../../components/buttons/Btn2/Btn2";
import * as style from "./styles";
import { shortenText } from "../../utils/shortenText";
import { convertPriceComma } from "../../utils/convertPriceComma";
import Btn1 from "../../components/buttons/Btn1/Btn1";
import { GrMoney } from "react-icons/gr";
import PointCharge from "../../components/PointCharge/PointCharge";

const Order = () => {
  const { sellData }: { sellData: ISellDetail } = useLocation().state;

  return (
    <style.Container>
      <style.Title>주문 / 결제</style.Title>
      <div className="content-wrap">
        <style.ProductBox>
          <div className="caption">주문상품</div>
          <div className="product-wrap">
            <div className="img-box">
              <img src={sellData.bookInfo.cover} />
            </div>

            <div className="r-col">
              <style.Col1>
                <div className="title-wrap">
                  <h1 className="title">{shortenText(sellData.title, 34)}</h1>
                  <style.ColorBoxGrade>{sellData?.grade}</style.ColorBoxGrade>
                </div>

                <div className="sub-text-wrap">
                  <div>{sellData.createdAt}</div>
                  <div>{shortenText(sellData.bookInfo.title, 20)}</div>
                </div>

                <style.ColorBoxPrice>
                  {convertPriceComma(sellData?.price)}원
                </style.ColorBoxPrice>
              </style.Col1>
            </div>
          </div>
        </style.ProductBox>

        <style.PurchaseBox>
          <div className="con1">
            <div className="wrap1 point-wrap">
              <h1 className="label">내 보유 포인트</h1>
              <h2 className="point">1000P</h2>
            </div>
            <div className="wrap2 point-wrap">
              <h1 className="label">결제 금액</h1>
              <h2 className="point">1000P</h2>
            </div>
            <div className="wrap3">
              <PointCharge />
            </div>
          </div>
          <div className="con2">
            <div className="wrap4 ">
              <style.PurchaseBtn>결제하기</style.PurchaseBtn>
            </div>
            <div className="wrap5 point-wrap">
              <h1 className="label">결제 후 포인트</h1>
              <h2 className="point">1000P</h2>
            </div>
          </div>
        </style.PurchaseBox>
      </div>
    </style.Container>
  );
};

export default Order;
