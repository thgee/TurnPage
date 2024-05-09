import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginRedirect = () => {
  // 쿼리스트링에서 인가코드 받아와서 백엔드로 넘기기
  // 백엔드에서 토큰 방아와서 localstorage에 저장한 후 페이지 이동
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // 인가코드
  console.log(searchParams.get("code"));

  useEffect(() => {}, []);
  return <>spinner</>;
};

export default LoginRedirect;
