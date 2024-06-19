import { useNavigate } from "react-router-dom";
import * as style from "./styles";

const ReportDetail = () => {
  const navigate = useNavigate();

  // react-query로 독후감 정보 받아와서 화면에 렌더링 해야 함

  return (
    <style.Container>
      <h1 className="page-title">독후감</h1>
      <style.Row1>
        <div className="row1-col1">
          <div className="img-box">
            <img src={imgsrc} onClick={() => navigate("/book-detail url")} />
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

        <div className="row1-col2"></div>
      </style.Row1>
      <style.Row2>
        <div className="content-box">내용</div>
      </style.Row2>
    </style.Container>
  );
};

export default ReportDetail;

export default ReportDeail;
