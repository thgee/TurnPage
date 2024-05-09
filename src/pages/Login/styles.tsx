import styled from "styled-components";
import KakaoLoginBtn from "../../components/LoginBtn/KakaoBtn/KakaoLoginBtn";
import GoogleLoginBtn from "../../components/LoginBtn/GoogleBtn/GoogleLoginBtn";

export const Container = styled.div`
  height: 100vh;
`;
export const ColContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const btnWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    margin: 10px 0;
  }
`;
