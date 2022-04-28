import { useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { FETCH_USER_LOGGED_IN } from "../../../components/units/user/login/Login.query"

const Wrapper = styled.div`
  height: 100px;
  background-color: #d5c5a9;
  display: flex;
  justify-content: flex-end;
  color: white;
  padding-right: 15px;
  align-items: center;
  font-size: 16px;
  font-weight: 700;

`
const Login = styled.div`
  width: 100px;
  margin-right: 20px;
  text-align: center;
  &:hover {
    color: white;
  }
`
const Boards = styled(Login)``
const MyPage = styled(Login)``

const Font = styled.span`
  cursor: pointer;
  padding-bottom: 6px;
  
  
`
  

export default function LayoutHeader () {
  const router = useRouter();

  const moveToMarket = () => {
    router.push('/product/list')
  }

  const moveBoardList = () => {
    router.push('/boards')
  }

  const moveLogin = () => {
    router.push('/user/login')
  }

  const moveMypage = () => {
    router.push('/user/myPage')
  }

  const userLoggedIn = useQuery(FETCH_USER_LOGGED_IN)

  return( 
    <Wrapper>
      <Boards><Font onClick={moveToMarket}>중고게시판</Font></Boards>
      <Boards><Font onClick={moveBoardList}>자유게시판</Font></Boards>
      <Login><Font onClick={moveLogin}>{userLoggedIn ? "로그아웃" : "로그인"}</Font></Login>
      <MyPage><Font onClick={moveMypage}>마이페이지</Font></MyPage>
    </Wrapper> );
}