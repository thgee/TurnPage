import { useQuery } from "@tanstack/react-query";
import BookItem2 from "./ReportItem/ReportItem";
import { Container } from "./styles";
import { apiGetBestSeller } from "../../apis/bestseller/apiGetBestSeller";
import { IBestSeller } from "../../apis/bestseller/types";
import BestSeller from "../../pages/BestSeller/BestSeller";
import ReportItem from "./ReportItem/ReportItem";
import SellItem from "./SellItem/SellItem";
import BestSellerItem from "./BestSellerItem/BestSellerItem";
import { ISellItemProps } from "./SellItem/types";
import { IReportItem } from "./ReportItem/types";

// mode : best, sell, report
const BookList = ({ mode }: { mode: "best" | "sell" | "report" }) => {
  let queryKey = [""],
    queryFn;

  switch (mode) {
    case "best":
      queryKey = ["best"];
      queryFn = () => apiGetBestSeller(0, 50);
      break;
    case "sell":
      // queryKey = ["sell"];
      // queryFn = () => apiGetSell(0, 50);
      break;
    case "report":
      // queryKey = ["report"];
      // queryFn = () => apiGetReport(0, 50);
      break;
  }
  const { isLoading, data } = useQuery<
    IBestSeller[] | ISellItemProps[] | IReportItem[]
  >({
    queryKey,
    queryFn,
  });

  if (isLoading) return <div>로딩중...</div>;

  return (
    <Container>
      {data?.map((info) => (
        <>
          {mode === "best" && (
            <BestSellerItem
              key={(info as IBestSeller).bookId}
              bookInfo={info as IBestSeller}
            />
          )}
          {/* 책방이나 독후감 리스트 API 호출 시 as로 narrowing 후 사용하기 */}
          {/* {mode === "sell" && <SellItem key={}} bookInfo={info} />}
          {mode === "report" && (
            <ReportItem key={} bookInfo={info} />
          )} */}
        </>
      ))}
    </Container>
  );
};

export default BookList;
