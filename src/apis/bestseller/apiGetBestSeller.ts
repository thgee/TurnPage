import axios from "axios";

export const apiGetBestSeller = (page: number, size: number) => {
  const params = { page: page, size: size };

  return axios
    .get(`${process.env.REACT_APP_SERVER_DOMAIN}/books/bestSeller`, { params })
    .then(
      ({
        data: {
          data: { bookPageElements },
        },
      }) => {
        bookPageElements.map((it: any) => {
          let _title = it.title.match(/^[^-]*/)[0];
          let match = it.title.match(/-(.*)/);
          if (match !== null && match[1] !== undefined) {
            it.subTitle = match[1];
          } else it.subTitle = "";
          it.title = _title;
          return it;
        });
        return bookPageElements;
      }
    )
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
