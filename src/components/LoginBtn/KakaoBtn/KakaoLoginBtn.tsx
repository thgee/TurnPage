const KakaoLoginBtn = ({ className }: { className?: string }) => {
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_DOMAIN}/oauth2/authorization/kakao`;
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
