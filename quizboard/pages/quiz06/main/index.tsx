import { gql, useApolloClient, useMutation } from "@apollo/client"
import styled from "@emotion/styled"
import { Modal } from "antd"
import { useRouter } from "next/router"
import { ChangeEvent, useEffect, useState } from "react"
import { useRecoilState} from "recoil"
import { accessTokenState, userInfomationState } from "../../../src/commons/store"


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
    const [isOpen, setIsOpen] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const router = useRouter()
  
    const client = useApolloClient()

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const onClickMoveBasket = () => {
      router.push('./baskets')
      setIsModalVisible(false);
    }
  
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
      
      if (localStorage.getItem("baskets")) {
        // setIsOpen(true)
        setIsModalVisible(true);
        // alert("")
      }
    }
  
  
    return (
      <div>
        id: <input type="text" onChange={onChangeEmail}/> <br/>
        password: <input type="password" onChange={onChangePassword}/><br/>
  
        <button onClick={onClickLogin}>로그인하기</button> 
    
        <Modal
        visible={isModalVisible}
        okButtonProps={{
          children: "Custom OK"
        }}
        okText="이동하기"
        onOk={onClickMoveBasket}
        onCancel={handleCancel}>
          비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?
        </Modal>
        
        
   
      </div>
    )
  }


