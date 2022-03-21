import {useRouter} from 'next/router'
import BoardListUI from './BoardList.presenter'

export default function BoardListContainer () {
  const router = useRouter()
  
  const onClickMove1 = () => {
    // 다 새로운 파일을 만들면 ,, 그룹으로 묶고
    // 
    router.push("/day6/05-06-dynamic-routed-board/83011")
  }
  const onClickMove2 = () => {
    router.push("/day6/05-06-dynamic-routed-board/83012")
  }
  const onClickMove3 = () => {
    router.push("/day6/05-06-dynamic-routed-board/83013")
  }

  return (
    <BoardListUI
        onClickMove1={onClickMove1}
        onClickMove2={onClickMove2}
        onClickMove3={onClickMove3}></BoardListUI>
  )
}

