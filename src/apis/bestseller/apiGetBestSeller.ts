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
        return bookPageElements;
      }
    )
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
