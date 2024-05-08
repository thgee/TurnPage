const KakaoLoginBtn = () => {
  const redirect_uri = "http://localhost:3000/"; //Redirect URI
  // oauth 요청 URL
  console.log(process.env.REACT_APP_KAKAO_REST_API_KEY);
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};
export default KakaoLoginBtn;
