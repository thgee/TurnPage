import { useParams } from "react-router-dom";
import * as style from "./styles";

const ReportDetail = () => {
  const { reportId } = useParams();
  return <style.Container>{reportId}</style.Container>;
};

export default ReportDetail;
