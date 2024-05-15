const KakaoLoginBtn = ({ className }: { className?: string }) => {
  const handleLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_DOMAIN}/loginredirect`;
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
