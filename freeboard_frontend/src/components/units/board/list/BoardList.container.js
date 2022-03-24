import { FETCH_BOARDS } from "./BoardList.queries"
import BoardListUi from "./BoardList.presenter"
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

export default function BoardList () {
  const router = useRouter();
  const {data} = useQuery(FETCH_BOARDS)


  const onClickDetailMove = async (event) => {
    router.push(`/boards/detailBoard/${event.target.id}`)
  }

  const MoveWritePage = () => {
    router.push(`/boards/new`)
  }


  return (
    <BoardListUi data={data} onClickDetailMove={onClickDetailMove} MoveWritePage={MoveWritePage}></BoardListUi>
  )
}