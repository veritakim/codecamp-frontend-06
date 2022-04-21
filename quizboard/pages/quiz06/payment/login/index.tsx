import { gql, useApolloClient, useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { useFormState } from "react-hook-form"
import { useRecoilState } from "recoil"
import { accessTokenState, userInfomationState } from "../../../../src/commons/store"

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
      userPoint{
        amount
      }
    }
  }
`



export default function PaymentLoginPage () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginUser] = useMutation(LOGIN_USER)
  const [, setUserInfo] =  useRecoilState(userInfomationState)
  const [, setAccessToken] = useRecoilState(accessTokenState)

  const router = useRouter()

  const client = useApolloClient()
  
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitLogin = async (data) => {
    const result = await loginUser({
      variables: {
        email,
        password
      }
    })

    const accessToken = result.data.loginUser.accessToken
    setAccessToken(accessToken)

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

    router.push('/quiz06/payment/loading')

  }
 
  return(
    <div>
        <div>로그인 : <input type="text" onChange={onChangeEmail} /></div>
        <div>비밀번호 : <input type="password" onChange={onChangePassword} /></div>
        <div><button onClick={onSubmitLogin}>로그인</button></div>
    </div>
  )
}