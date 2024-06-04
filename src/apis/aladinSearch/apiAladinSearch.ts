import axios from "axios";
export const apiAladinSearch = (query: string) => {
  const params = {
    ttbkey: process.env.REACT_APP_ALADIN_API_KEY,
    Query: query,
    QueryType: "Title",
    MaxResults: 10,
    start: 1,
    SearchTarget: "Book",
    output: "JS",
    version: 20070901,
  };
  return axios
    .get(`https://www.aladin.co.kr/ttb/api/ItemSearch.aspx`, {
      params,
    })
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
