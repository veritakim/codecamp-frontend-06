import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage"

// 클릭해서 이동 할 때마다 onClick ~~~ 함수로 만들어 줬어야 했다. 그것을 하나로 통일 시키기
export default function CustomHooksUseMoveToPage () {
  
  const {onClickMoveToPage} = useMoveToPage()

  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  )

}
