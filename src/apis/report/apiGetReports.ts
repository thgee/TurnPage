import axios from "axios";
import { IReport } from "./types";
import { IBestSeller } from "../bestseller/types";

export const apiGetReports = ({
  pageParam,
  accessToken,
}: {
  pageParam: number;
  accessToken: string;
}) => {
  const params = { page: pageParam, size: 10 };

  return axios

    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/reports/following`, {
      params,

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(
      ({
        data: {
          data: { reportInfoList },
        },
      }) => {
        reportInfoList.map((it: any) => {
          // 제목, 부제 parsing
          let _title = it.bookInfo.title.match(/^[^-]*/)[0];
          let match = it.bookInfo.title.match(/-(.*)/);
          if (match !== null && match[1] !== undefined) {
            it.bookInfo.subTitle = match[1];
          } else it.bookInfo.subTitle = "";
          it.bookInfo.title = _title;

          // 별점이 0이면 5로 바꿔주기
          if (it.bookInfos.star === 0) it.bookInfo.star = 5;

          return it;
        });
        return reportInfoList as IReport[];
      }
    )
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
