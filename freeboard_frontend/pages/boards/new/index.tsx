// /board/new 로 접속할 수 있다.
import BoardWritePage from '../../../src/components/units/board/write/BoardWrite.container'


export default function RegisterPage() {
  
  return (
    <BoardWritePage isEdit={false} />
  )
}
