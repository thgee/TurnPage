import ReactModal from "react-modal";
import { apiSearchBookAladin } from "../../apis/aladinOpenAPI/apiSearchBookAladin";
import SearchBox from "../SearchBox/SearchBox";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { ISearchBookAladin } from "../../apis/aladinOpenAPI/types";
import { debounce } from "lodash";
import * as style from "./styles";

const SearchBookModal = ({
  modalToggle,
  setModalToggle,
}: ISearchBookModalProps) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState<ISearchBookAladin[]>([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setQuery(query);
        if (query.length <= 2) {
          setSearchedBooks([]);
          return;
        }
        apiSearchBookAladin(query).then((data) => setSearchedBooks(data));
      }, 200),
    [query]
  );

  return (
    <ReactModal
      isOpen={modalToggle}
      onRequestClose={() => setModalToggle(false)}
      style={modalStyle}
    >
      <style.Container>
        <SearchBox className="search-box">
          {/* onClick={handleSearch} */}
          <input
            type="text"
            placeholder="저자, 제목 등을 이용해 책을 검색해주세요."
            // onChange={(e) => setQuery(e.currentTarget.value)}
            onChange={(e) => {
              debouncedSearch(e.currentTarget.value);
            }}
            // value={query}
            onKeyDown={(e) => {
              // if (e.key === "Enter") handleSearch();
            }}
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
    minHeight: "500px",
    height: "fit-content",
    borderRadius: "25px",
    zIndex: "150",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    boxShadow: "0px 0px 100px 6px rgba(0, 0, 0, 0.3)",
  },
};
