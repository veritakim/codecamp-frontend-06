import { useRouter } from "next/router"
import { useEffect } from "react"
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../../../commons/store";

// @ts-ignore
export const WithAuth = (Component) => (props) => {
  const router = useRouter()
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  // 권한 분기 로직 추가하기
  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          router.push("/user/login");
        }
      });
    }
  }, []);

  return <Component {...props} />

}