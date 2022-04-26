import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password){
      accessToken
    }
  }
` 

export default function LoginPage () {
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const [loginUser] = useMutation(LOGIN_USER)

  const onChangeEmail = (event) => [
    setEmail(event.target.value)
  ]

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onClickLogin = async() => {
    const result = await loginUser({
      variables: {
        email,
        password
      }
    })
    
    const accessToken = result.data.loginUserExample.accessToken
    setAccessToken(accessToken)
    alert("로그인 성공")
    router.push('/quiz07/refreshToken-loginSuccess')

  }

  return (
    <div>
      id: <input type="text" onChange={onChangeEmail}/> <br/>
      password: <input type="password" onChange={onChangePassword}/><br/>

      <button onClick={onClickLogin}>로그인하기</button> 
    </div>
  )
}