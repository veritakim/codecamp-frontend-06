import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfomationState } from "../../../../commons/store";
import LoginPresenter from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.query";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .matches(/^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){8,16}$/,
                "영문+숫자를 조합 8~16자리의 비밀번호를 입력해주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

export default function LoginContainer() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  }
  )

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

      // localStorage.setItem("accessToken", accessToken)
      // localStorage.setItem("userInfo", JSON.stringify(userInfo))

      router.push('/boards')

    } catch(error) {
      alert(error.message)
    } 

  }
  
  return (
  <LoginPresenter
    formState={formState}
    register={register}
    onChangeEmail={onChangeEmail}
    onChangePassword={onChangePassword}
    onClickSubmit={onClickSubmit}
  />)
}
