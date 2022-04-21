import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfomationState } from "../../../../commons/store";
import LoginPresenter from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.query";

export default function LoginContainer() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser] = useMutation(LOGIN_USER)
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const [, setUserInfo] = useRecoilState(userInfomationState)
  const router = useRouter()

  const client = useApolloClient()

  const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onClickSubmit = async (event:MouseEvent<HTMLButtonElement>) => {
    if(!email && !password) {
      alert("정보를 입력하세요")
      return;
    } 
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        }
      })

      alert("로그인 성공")
      const accessToken = result.data.loginUser.accessToken

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      })

      const userInfo = resultUserInfo.data.fetchUserLoggedIn

      setUserInfo(userInfo)

      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("userInfo", JSON.stringify(userInfo))

      router.push('/boards')

    } catch(error) {
      alert(error.message)
    } 

  }
  
  return (
  <LoginPresenter
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onClickSubmit={onClickSubmit}
  />)
}
