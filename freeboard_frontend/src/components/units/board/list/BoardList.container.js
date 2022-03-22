import { FETCH_BOARDS } from "./BoardList.queries"
import BoardListUi from "./BoardList.presenter"
import {useQuery} from '@apollo/client'

export default function BoardList () {

  const {data} = useQuery(FETCH_BOARDS)


  return (
    <BoardListUi data={data}></BoardListUi>
  )
}