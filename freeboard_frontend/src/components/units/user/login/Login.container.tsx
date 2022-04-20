import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import LoginPresenter from "./Login.presenter";
import { LOGIN_USER } from "./Login.query";

export default function LoginContainer() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser] = useMutation(LOGIN_USER)
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const router = useRouter()

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
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken)
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
