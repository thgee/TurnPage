import { useState } from "react";
import TabBtn from "../../components/TabBtn/TabBtn";
import * as Style from "./styles";
import BookList from "../../components/BookList/BookList";
import Profile from "../../components/myPage/Profile/Profile";
import Friend from "../../components/myPage/Friend/Friend";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../recoil/accessTokenState";
import { useQuery } from "@tanstack/react-query";
import { apiGetUserInfo } from "../../apis/myPage/apiGetUserInfo";
import { Navigate, useNavigate } from "react-router-dom";
import { stat } from "fs";

const MyPage = () => {
  const [tabState, SetTabState] = useState<
    "report" | "store" | "myReport" | "mySell"
  >("myReport");

  const accessToken = useRecoilValue(accessTokenState);

  // 로그인 하지 않았다면 로그인화면으로 이동
  if (!accessToken)
    return <Navigate to="/login" state={{ prePagePath: "/mypage" }} />;
  return (
    <Style.Container>
      {/* 프로필, 친구 박스 */}
      <Style.Section1>
        <Style.Title>마이페이지</Style.Title>
        <div className="row">
          <div className="col1">
            <Profile />
          </div>
          <div className="col2">
            <Friend />
          </div>
        </div>
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
