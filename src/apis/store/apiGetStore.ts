import axios from "axios";
import { IStore } from "./types";

// 판매중인 책 리스트
export const apiGetStore = ({ pageParam }: { pageParam: number }) => {
  const params = { page: pageParam, size: 10 };

  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/salePosts`, { params })
    .then(
      ({
        data: {
          data: { salePostInfoList },
        },
      }) => {
        salePostInfoList.map((it: any) => {
          // 부제 생성
          let _title = it.bookInfo.title.match(/^[^-]*/)[0];
          let match = it.bookInfo.title.match(/-(.*)/);
          if (match !== null && match[1] !== undefined) {
            it.bookInfo.subTitle = match[1];
          } else it.bookInfo.subTitle = "";
          it.bookInfo.title = _title;

          // 별점이 0이면 5로 바꿔주기
          if (it.star === 0) it.star = 5;

          return it;
        });
        return salePostInfoList as IStore[];
      }
    )
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
