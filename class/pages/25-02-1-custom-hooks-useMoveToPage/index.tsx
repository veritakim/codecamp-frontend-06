import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { visitedPageState } from "../../src/commons/stroe"

// 클릭해서 이동 할 때마다 onClick ~~~ 함수로 만들어 줬어야 했다. 그것을 하나로 통일 시키기
export default function CustomHooksUseMoveToPage () {
  const router = useRouter()
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState)

  const onClickMoveToPage = (path: string) => () => {
    setVisitedPage(path)
    router.push(path)  
  }  
  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  )

}
