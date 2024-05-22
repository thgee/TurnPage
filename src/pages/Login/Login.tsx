import { useEffect } from "react";
import GoogleLoginBtn from "../../components/LoginBtn/GoogleBtn/GoogleLoginBtn";
import KakaoLoginBtn from "../../components/LoginBtn/KakaoBtn/KakaoLoginBtn";
import * as Style from "./styles";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

const Login = () => {
  const _prePagePath = useLocation().state?.prePagePath;

  useEffect(() => {
    // 로그인 페이지로 이동하기 이전 페이지를 로컬스토리지에 저장
    localStorage.setItem("prePagePath", _prePagePath);
  }, []);

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
