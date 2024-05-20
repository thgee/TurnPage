const KakaoLoginBtn = ({ className }: { className?: string }) => {
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      process.env.REACT_APP_KAKAO_API_KEY
    }&redirect_uri=${
      process.env.REACT_APP_DOMAIN
    }/loginredirect&state=${generateRandomString(20)}
    `;
  };
  return (
    <>
      <img
        className={className}
        src={`${process.env.PUBLIC_URL}/assets/kakaoBtn.png`}
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default KakaoLoginBtn;

// 랜덤문자열 생성
function generateRandomString(length: number) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}
