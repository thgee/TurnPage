import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginRedirect = () => {
  // 1. 쿼리스트링에서 인가코드 받아와서 백엔드로 넘기기
  // 2. 백엔드에서 토큰 받아와서 localstorage에 저장한 후 페이지 이동
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // 인가코드, state
  const authCode = searchParams.get("code");
  const authState = searchParams.get("state");

  useEffect(() => {
    // API로 인가코드 보내고 토큰 받아오기
    // 받아온 토큰을 localStorage에 저장
    // 저장한 후 로그인 이전페이지로 이동 (뒤로가기 두번?)
  }, []);
  return <>로그인 중..</>;
};

export default LoginRedirect;
