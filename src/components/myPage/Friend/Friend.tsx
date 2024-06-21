import { useState } from "react";
import FriendItem from "./FriendItem/FriendItem";
import * as Style from "./styles";
import AddFriendModal from "./AddFriendModal/AddFriendModal";

const Friend = () => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <Style.Container>
      <AddFriendModal
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />

      <Style.Header>
        <div className="row1">
          친구<span>5명</span>
        </div>
        <button className="add-friend" onClick={() => setModalToggle(true)}>
          친구 추가
        </button>
      </Style.Header>
      <Style.List>
        <FriendItem
          img={`${process.env.PUBLIC_URL}/tmp/bookImg.svg`}
          name="이태혁"
        />
      </Style.List>
    </Style.Container>
  );
};

export default Friend;
