import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
import { InView, useInView } from "react-intersection-observer";
import { useEffect } from "react";

// mode : best, sell, report
const BookList = ({
  mode,
}: {
  mode: "best" | "sell" | "report" | "myReport" | "mySell";
}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    // 스크롤 감지 블럭이 화면에 들어오고 다음페이지가 존재하는 경우 api 호출
    if (inView && hasNextPage) fetchNextPage();
  }, [inView]);

  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [mode],
    queryFn: getQueryFn(mode),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // 데이터가 없는 페이지까지 호출한 후 그 다음부터는 다음페이지가 없음을 알려주어 호출하지 않음
      // nextPageParam으로 undefined를 넘겨주면 더이상 fetchNextPage가 작동하지 않는다
      if (lastPage.length === 0) return undefined;

      return allPages.length;
    },
  });

  return (
    <Container>
      {/* 리스트 렌더링 */}
      {data?.pages?.map((infos) =>
        infos.map((info: IBestSeller | ISellItemProps | IReportItem) => (
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
        ))
      )}

      {/* 스크롤 감지 스피너*/}
      {hasNextPage && (
        <img
          src={`${process.env.PUBLIC_URL}/assets/spinner1.gif`}
          ref={ref}
          style={{ width: 60, display: "block", margin: "30px auto" }}
        />
      )}
    </Container>
  );
};

export default BookList;

const getQueryFn = (
  mode: "best" | "sell" | "report" | "myReport" | "mySell"
) => {
  switch (mode) {
    case "best":
      return apiGetBestSeller;
    case "report":
      return apiGetBestSeller; // 독후감 리스트 조회 API 완성되면 수정
    case "sell":
      return apiGetBestSeller; // 책방 리스트 조회 API 완성되면 수정
    case "myReport":
      return apiGetBestSeller; // 내 독후감 리스트 조회 API 완성되면 수정
    case "mySell":
      return apiGetBestSeller; // 내 판매글 리스트 조회 API 완성되면 수정
  }
};
