const KakaoLoginBtn = () => {
  const handleLogin = () => {
    window.location.href = "";
  };
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/kakaoBtn.png`}
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default KakaoLoginBtn;
