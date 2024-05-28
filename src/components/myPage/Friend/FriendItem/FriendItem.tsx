import * as style from "./styles";
import { IFriendItemProps } from "./types";
import { AiOutlineUserDelete } from "react-icons/ai";
const FriendItem = ({ img, name }: IFriendItemProps) => {
  return (
    <style.Container>
      <div>
        <img src={img} className="profile-img" />
      </div>
      <div className="name">{name}</div>
      <AiOutlineUserDelete size={30} style={{ cursor: "pointer" }} />
    </style.Container>
  );
};

export default FriendItem;
