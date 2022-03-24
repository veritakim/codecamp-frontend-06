// 수정페이지 write 컨테이너로 넘겨줄 것.
import BoardWritePage from "../../../../../src/components/units/board/write/BoardWrite.container"
import { FETCH_BOARD } from "../../../../../src/components/units/board/write/BoardWrite.queries"
import {useQuery} from '@apollo/client'
import {useRouter} from 'next/router'

export default function BoardEdit () {
  const router = useRouter();

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: (router.query.boardId)
  }
})


  return (

    <BoardWritePage isEdit={true} data={data}/>
  )
}