// 수정페이지 write 컨테이너로 넘겨줄 것.
import BoardWritePage from "../../../../../src/components/units/board/write/BoardWrite.container"

export default function BoardEdit () {
  return (

    <BoardWritePage isEdit={true} />
  )
}