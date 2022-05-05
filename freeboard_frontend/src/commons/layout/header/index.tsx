import { useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { Modal } from "antd"
import { gql } from "graphql-request"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { LOGOUT_USER } from "../../../components/units/user/login/Login.query"
import { accessTokenState} from "../../store"

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
  const [logoutUser] = useMutation(LOGOUT_USER)

  const accessToken = useRecoilState(accessTokenState)

  // console.log("header",accessToken)

  const onClickLogout = async () => {
    try {
      Modal.warning({
        title: "logout??",
        content: "정말로 로그아웃하시겠습니까?",
      });
      await logoutUser();
      location.reload();
      router.push("/boards");
    } catch {
      Modal.error({
        content: "로그아웃 실패",
      });
    }
  };

  return( 
    <Wrapper>
      <Boards><Font onClick={moveToMarket}>중고게시판</Font></Boards>
      <Boards><Font onClick={moveBoardList}>자유게시판</Font></Boards>
      <Login><Font onClick={accessToken[0] !== undefined ? onClickLogout : moveLogin}>{ accessToken[0] !== undefined ? "로그아웃"  : "로그인"}</Font></Login>
      <MyPage><Font onClick={moveMypage}>마이페이지</Font></MyPage>
    </Wrapper> );
}