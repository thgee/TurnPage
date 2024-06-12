import ReactModal from "react-modal";
import { apiSearchBookAladin } from "../../apis/aladinOpenAPI/apiSearchBookAladin";
import SearchBox from "../SearchBox/SearchBox";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { ISearchBookAladin } from "../../apis/aladinOpenAPI/types";
import { debounce } from "lodash";
import * as style from "./styles";

const SearchBookModal = ({
  modalToggle,
  setModalToggle,
}: ISearchBookModalProps) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState<ISearchBookAladin[]>([]);

  // useCallback을 사용하여 debounce 함수를 한 번만 생성하게 만듬
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      // 한 글자 이하이면 검색하지 않음
      if (query.length <= 1) {
        setSearchedBooks([]);
        return;
      }
      apiSearchBookAladin(query).then((data) => setSearchedBooks(data));
    }, 300),
    []
  );

  return (
    <ReactModal
      isOpen={modalToggle}
      onRequestClose={() => setModalToggle(false)}
      style={modalStyle}
    >
      <style.Container>
        <SearchBox className="search-box">
          <input
            type="text"
            placeholder="저자, 제목 등을 이용해 책을 검색해주세요."
            onChange={(e) => {
              setQuery(e.currentTarget.value);
              debouncedSearch(e.currentTarget.value);
            }}
            value={query}
          />
        </SearchBox>

        <ul>
          {searchedBooks.map((it) => (
            <style.BookItem>
              {/* 키워드는 다른색으로 표시 */}
              {it.title.split(query)[0]}
              {it.title.split(query)[1] && (
                <span style={{ color: "#FF9E9E" }}>{query}</span>
              )}
              {it.title.split(query)[1]}
            </style.BookItem>
          ))}
        </ul>
      </style.Container>
    </ReactModal>
  );
};

export default SearchBookModal;

interface ISearchBookModalProps {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const modalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    width: "50%",
    minWidth: "600px",
    // minHeight: "500px",
    // maxHeight: "70vh",
    height: "fit-content",
    borderRadius: "25px",
    zIndex: "150",
    position: "absolute",
    marginTop: "30px",
    transform: "translate(-50%, -50%)",
    paddingRight: "10px",
    top: "50%",
    left: "50%",
    boxShadow: "0px 0px 100px 6px rgba(0, 0, 0, 0.3)",
  },
};
