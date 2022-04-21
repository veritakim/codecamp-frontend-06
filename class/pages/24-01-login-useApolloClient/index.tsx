import { gql, useApolloClient, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { useRecoilState} from "recoil"
import { accessTokenState, userInfomationState } from "../../src/commons/store"


const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password){
      accessToken
    }
  }
` 


const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`

export default function LoginPage () {
  const [, setAccessToken] = useRecoilState(accessTokenState)
  const [, setUserInfo] = useRecoilState(userInfomationState)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser] = useMutation(LOGIN_USER)
  const router = useRouter()

  const client = useApolloClient()

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

    const accessToken = result.data.loginUser.accessToken
    
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    })
    // 객체로 온다
    const userInfo = resultUserInfo.data.fetchUserLoggedIn
    console.log("user", userInfo)
    // 글로벌 스테이트에 저장시키기
    setUserInfo(userInfo)
    
    setAccessToken(accessToken)
    localStorage.setItem("accessToken", accessToken)
    localStorage.setItem("userInfo", JSON.stringify(userInfo))

    alert("로그인에 성공했습니다.")
    router.push('/24-02-login-useApolloClient-success')
  }


  return (
    <div>
      id: <input type="text" onChange={onChangeEmail}/> <br/>
      password: <input type="password" onChange={onChangePassword}/><br/>

      <button onClick={onClickLogin}>로그인하기</button> 
    </div>
  )
}