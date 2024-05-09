const GoogleLoginBtn = () => {
  const handleLogin = () => {};
  return (
    <>
      <img
        src={`${process.env.PUBLIC_URL}/assets/googleBtn.png`}
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default GoogleLoginBtn;
