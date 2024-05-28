import * as Style from "./styles";

const Profile = () => {
  return (
    <Style.Container>
      <button className="profile-btn edit-profile-btn">프로필 수정</button>
      <Style.Col1>
        <img src={`${process.env.PUBLIC_URL}/tmp/bookImg.svg`} />
        <button className="profile-btn edit-img-btn">프로필 이미지 변경</button>
      </Style.Col1>
      <Style.Col2>
        <h1>이름</h1>
        <h2>이메일</h2>
        <h2>초대코드</h2>
      </Style.Col2>
      <Style.Col3>
        <h1>
          내 독서 기록 수<span>1</span>
        </h1>
        <h1>
          내 판매 도서 수<span>1</span>
        </h1>
        <h1>
          내 구매 도서 수<span>1</span>
        </h1>
      </Style.Col3>
    </Style.Container>
  );
};

export default Profile;
