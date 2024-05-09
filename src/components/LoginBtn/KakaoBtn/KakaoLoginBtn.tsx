const KakaoLoginBtn = ({ className }: { className?: string }) => {
  const redirect_uri = `${process.env.REACT_APP_DOMAIN}/loginredirect`; //Redirect URI
  // oauth 요청 URL
  console.log(process.env.REACT_APP_KAKAO_REST_API_KEY);
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
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
