import styled from "@emotion/styled"
import { useRouter } from "next/router"

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
  const moveBoardList = () => {
    router.push('/boards')
  }

  return( 
    <Wrapper>
      <Boards><Font onClick={moveBoardList}>자유게시판</Font></Boards>
      <Login><Font>로그인</Font></Login>
      <MyPage><Font>마이페이지</Font></MyPage>
    </Wrapper> );
}