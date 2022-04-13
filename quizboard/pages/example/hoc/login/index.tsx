import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState } from "../../../../src/commons/store"

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
  const router = useRouter()

  const [loginUser] = useMutation(LOGIN_USER)

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }
  const onClickLogin = async () => {
    try {
      if(email && password) {
        const result = await loginUser({
          variables:{
            email,
            password
          }
        })
  
        const accessToken = result.data.loginUser.accessToken
        setAccessToken(accessToken)
        localStorage.setItem("accessToken", accessToken)

        router.push('./main')
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      email : <input type="text" onChange={onChangeEmail}/>
      password : <input type="password" onChange={onChangePassword} />

      <button onClick={onClickLogin}>로그인</button>
    </div>
  )
}