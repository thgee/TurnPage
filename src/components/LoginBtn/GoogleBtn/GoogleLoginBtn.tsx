import { useNavigate } from "react-router-dom";

const GoogleLoginBtn = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_DOMAIN}/oauth2/authorization/google`;
  };
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
