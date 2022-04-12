import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!){
    loginUser(email: $email, password: $password) {
      accessToken 
    }
  }

`



export default function LoginPage () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const [loginUser] = useMutation(LOGIN_USER)
  const router = useRouter()

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onClickLogin = async() => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password
        }
      })
        const accessToken = result.data.loginUser.accessToken
        setAccessToken(accessToken)
        // alert()
        console.log(accessToken)
        router.push('/success')
    } catch (error) {
      alert(error.message)
    }
    
  }

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} /> <br />
      비밀번호 : <input type="password" onChange={onChangePassword} /> <br />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  )
}