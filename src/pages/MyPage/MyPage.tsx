import { useState } from "react";
import TabBtn from "../../components/TabBtn/TabBtn";
import * as Style from "./styles";
import BookList from "../../components/BookList/BookList";
import Profile from "../../components/myPage/Profile/Profile";
import Friend from "../../components/myPage/Friend/Friend";

const MyPage = () => {
  const [tabState, SetTabState] = useState<
    "report" | "sell" | "myReport" | "mySell"
  >("myReport");

  return (
    <Style.Container>
      {/* 프로필, 친구 박스 */}
      <Style.Section1>
        <Style.Title>마이페이지</Style.Title>
        <Profile />
        <Friend />
      </Style.Section1>

      {/* 내 독후감, 내 판매글 리스트 */}
      <Style.Section2>
        <Style._TabBtn
          mode="mypage"
          tabState={tabState}
          SetTabState={SetTabState}
        />
        <BookList mode={tabState} />
      </Style.Section2>
    </Style.Container>
  );
};

export default MyPage;
