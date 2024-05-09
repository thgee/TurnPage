import GoogleLoginBtn from "../../components/LoginBtn/GoogleBtn/GoogleLoginBtn";
import KakaoLoginBtn from "../../components/LoginBtn/KakaoBtn/KakaoLoginBtn";
import * as Style from "./styles";

const Login = () => {
  return (
    <Style.Container>
      <Style.ColContainer>
        <Style.Row>
          <img src={`${process.env.PUBLIC_URL}/assets/loginLogo.png`} />
          <Style.btnWrap>
            <KakaoLoginBtn />
            <GoogleLoginBtn />
          </Style.btnWrap>
        </Style.Row>
      </Style.ColContainer>
    </Style.Container>
  );
};

export default Login;
