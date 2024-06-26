import ReactModal from "react-modal";
import * as style from "./styles";
import { IoClose } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { useState } from "react";
import { convertPriceComma } from "../../utils/convertPriceComma";
import Btn1 from "../buttons/Btn1/Btn1";

const PointCharge = () => {
  const [modalToggle, setModalToggle] = useState(false);

  const points = [1000, 5000, 10000, 30000, 50000];

  return (
    <style.Container>
      <div className="g1" onClick={() => setModalToggle(true)}>
        <GrMoney />
        <div className="point-recharge">포인트 충전하기</div>
      </div>

      <ReactModal
        isOpen={modalToggle}
        style={modalStyle}
        onRequestClose={() => setModalToggle(false)}
      >
        <style.Modal>
          <div className="header">
            <h1 className="header-title">포인트 충전</h1>
            <IoClose
              size={20}
              onClick={() => setModalToggle(false)}
              style={{
                cursor: "pointer",
                color: "#aaa",
                position: "absolute",
                right: 20,
                top: 20,
              }}
            />
          </div>

          <ul className="point-list">
            {points.map((it) => (
              <li className="point-item">
                <h1 className="point-text">{convertPriceComma(it)} P</h1>
                <style.ChargeBtn onClick={() => {}}>충전</style.ChargeBtn>
              </li>
            ))}
          </ul>
        </style.Modal>
      </ReactModal>
    </style.Container>
  );
};

export default PointCharge;

const modalStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    width: "400px",
    height: "fit-content",
    borderRadius: "25px",
    zIndex: "150",
    transform: "translate(-50%, -50%)",
    padding: "30px",
    top: "50%",
    left: "50%",
    boxShadow: "0px 0px 100px 6px rgba(0, 0, 0, 0.3)",
  },
};
