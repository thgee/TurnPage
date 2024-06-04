import { apiAladinSearch } from "../../apis/aladinSearch/apiAladinSearch";
import * as Style from "./styles";

// 책 선택하기 버튼 클릭 시 알라딘 API로 책 고르게 하기
// 책 선택하면 책 정보

const ReportWrite = () => {
  console.log(apiAladinSearch("명상"));
  return <Style.Container></Style.Container>;
};

export default ReportWrite;
