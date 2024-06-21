import { useNavigate, useParams } from "react-router-dom";
import * as style from "./styles";
import { apiGetReportDetail } from "../../../apis/report/apiGetReportDetail/apiGetReportDetail";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/accessTokenState";
import { useQuery } from "@tanstack/react-query";
import { splitTitle } from "../../../utils/splitTitle";
import { convertDateFormat } from "../../../utils/convertDateFormat";
import Btn2 from "../../../components/buttons/Btn2/Btn2";
import { apiDeleteReport } from "../../../apis/report/apiDeleteReport/apiDeleteReport";

const ReportDetail = () => {
  const navigate = useNavigate();
  const { reportId } = useParams();
  const accessToken = useRecoilValue(accessTokenState);

  // react-query로 독후감 정보 받아와서 화면에 렌더링 해야 함
  const { data: reportData } = useQuery({
    queryKey: ["reportDetail", reportId],
    queryFn: () => apiGetReportDetail(Number(reportId), accessToken as string),
  });

  const handleDeleteReport = () => {
    // apiDeleteReport(Number(reportId), accessToken as string).then()
  };

  return (
    <style.Container>
      <h1 className="page-title">독후감</h1>
      <style.Row1>
        <div className="row1-col1">
          <div className="img-box">
            <img
              src={reportData?.bookInfo.cover}
              onClick={() =>
                navigate(`/book-detail/${reportData?.bookInfo.bookId}`)
              }
            />
          </div>

          <div className="book-info-wrap">
            <li className="title-wrap">
              <span className="title">
                {splitTitle(reportData?.bookInfo.title)?.title}
              </span>
              <span className="subTitle">
                {splitTitle(reportData?.bookInfo.title)?.subTitle}
              </span>
            </li>
            <li>저자 : {reportData?.bookInfo?.author}</li>
            <li>출판사 : {reportData?.bookInfo?.publisher}</li>
            <li>
              출판일 :{" "}
              {convertDateFormat(reportData?.bookInfo?.publicationDate)}
            </li>
          </div>
        </div>

        <div className="row1-col2">
          <div className="profile-date-wrap">
            <div className="profile-wrap">
              <img
                className="profile-img"
                src={reportData?.memberInfo.profileImage}
              />
              <span className="name">{reportData?.memberInfo.name}</span>
            </div>
            <div className="date">{reportData?.createdAt}</div>
          </div>
          <div className="report-title color-box ">{reportData?.title}</div>
          <div className="period-wrap color-box ">
            <div className="period-rabel">독서 기간</div>
            <div className="period-text">
              {reportData?.startDate} - {reportData?.endDate}
            </div>
          </div>
          <div className="btn-wrap">
            <Btn2
              className="btn"
              onClick={() =>
                navigate(`/report/edit`, { state: { reportData: reportData } })
              }
            >
              수정
            </Btn2>
            <Btn2 className="btn" onClick={handleDeleteReport}>
              삭제
            </Btn2>
          </div>
        </div>
      </style.Row1>
      <style.Row2>
        <pre className="content-box color-box ">{reportData?.content}</pre>
      </style.Row2>
    </style.Container>
  );
};

export default ReportDetail;
