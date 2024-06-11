import ReactModal from "react-modal";
import { apiSearchBookAladin } from "../../apis/aladinOpenAPI/apiSearchBookAladin";

const SearchBookModal = ({
  modalToggle,
  setModalToggle,
}: ISearchBookModalProps) => {
  console.log(apiSearchBookAladin("명상"));

  return (
    <ReactModal
      isOpen={modalToggle}
      onRequestClose={() => setModalToggle(false)}
      style={modalStyle}
    >
      모달
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
    width: "400px",
    height: "120px",
    borderRadius: "25px",
    zIndex: "150",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    boxShadow: "0px 0px 100px 6px rgba(0, 0, 0, 0.3)",
  },
};
