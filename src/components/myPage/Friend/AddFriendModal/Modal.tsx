import ReactModal from "react-modal";
import * as style from "./styles";
import { IoPersonAddSharp } from "react-icons/io5";

const AddFriendModal = ({
  modalToggle,
  setModalToggle,
}: IAddFriendModalProps) => {
  return (
    <ReactModal
      isOpen={modalToggle}
      onRequestClose={() => setModalToggle(false)}
      style={modalStyle}
    >
      <style.Container>
        <div className="row1">친구로 등록할 회원의 이메일을 입력해 주세요.</div>
        <div className="row2">
          <input type="text" />
          <IoPersonAddSharp size={30} style={{ cursor: "pointer" }} />
        </div>
      </style.Container>
    </ReactModal>
  );
};

export default AddFriendModal;

interface IAddFriendModalProps {
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
