// 게시글 목록 조회하기 화면 만들기 ㅎ
import BoardList from "../../src/components/units/board/list/BoardList.container"

export default function ListPage () {
  // const [accessToken] = useRecoilState(accessTokenState)
  // const router = useRouter()

  // useEffect(() => {
  //   if(!accessToken) {
  //     alert("로그인 후 이용")
      
  //     router.push('/user/login')
  //   }
  // }, [])

  return (
    <BoardList />
  )
}