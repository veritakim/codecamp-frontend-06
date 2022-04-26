import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState} from "recoil"
import { accessTokenState } from "../../src/commons/store"

// 토큰 만료시간 5초
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
  const [loginUser] = useMutation(LOGIN_USER)
  const router = useRouter()

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password
      }
    })

    const accessToken = result.data.loginUserExample.accessToken
    setAccessToken(accessToken)
    console.log(accessToken)
    alert("로그인에 성공했습니다.")
    router.push('/30-02-login-success')
  }


  return (
    <div>
      id: <input type="text" onChange={onChangeEmail}/> <br/>
      password: <input type="password" onChange={onChangePassword}/><br/>

      <button onClick={onClickLogin}>로그인하기</button> 
    </div>
  )
}