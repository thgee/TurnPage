import axios from "axios";
import { IAladin } from "./types";

export const apiSearchBookAladin = (query: string) => {
  return axios
    .get(
      `${process.env.REACT_APP_SERVER_DOMAIN}/books/openAPI/search?keyword=${query}`
    )
    .then(({ data: { data } }) => data as IAladin[])
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
