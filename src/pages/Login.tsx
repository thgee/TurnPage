const KakaoLoginBtn = () => {
  const redirect_uri = `${process.env.REACT_APP_DOMAIN}/loginredirect`; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/kakaoLoginImg.png`}
        onClick={handleLogin}
      />
    </>
  );
};

const Login = () => {
  return (
    <>
      <KakaoLoginBtn />
    </>
  );
};

export default Login;
