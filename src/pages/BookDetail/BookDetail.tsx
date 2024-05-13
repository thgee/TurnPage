import { Link, useParams } from "react-router-dom";
import * as style from "./styles";

const BookDetail = () => {
  const { title } = useParams();
  console.log(title);
  return (
    <style.Container>
      <style.Section1>
        <style.TitleWrap>
          <h1>명상살인</h1>
          <h2>죽여야 사는 변호사</h2>
        </style.TitleWrap>

        <style.InfoWrap>
          <div className="col col1">
            <div className="row1">
              <h1>카르스텐 두세</h1>
              <h1>문학동네 2021년 8월</h1>
            </div>

            <div className="row2">
              <div>별별별별별</div>
              <Link to="#">다른 독자들의 리뷰 둘러보기</Link>
            </div>
          </div>
          <div className="col col2">
            <img src={`${process.env.PUBLIC_URL}/tmp/bookImg.svg`} />
            <Link to="#">중고 판매 글 확인하러 가기</Link>
          </div>
          <div className="col col3">
            <h1>책 소개</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              quaerat ipsam sint expedita rerum, numquam temporibus accusamus
              necessitatibus ipsa sunt? Totam, autem quaerat temporibus
              accusamus eveniet tempora nesciunt sed assumenda! Non id aliquid
              architecto eum nulla eveniet quod quae minus quis, iusto dolores,
              et laudantium delectus maiores optio similique? Deleniti, sequi.
              Id veritatis laudantium vel aperiam fugit repellendus qui
              accusamus? Nesciunt odio labore molestias provident architecto
              repudiandae maxime est velit facere! Iste odio consequuntur,
            </p>
          </div>
        </style.InfoWrap>
      </style.Section1>

      <style.Section2></style.Section2>
    </style.Container>
  );
};

export default BookDetail;
