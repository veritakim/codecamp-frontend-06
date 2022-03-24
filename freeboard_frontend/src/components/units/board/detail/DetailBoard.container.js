import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from './DetailBoard.queries'
import DetailBoardUi from './DetailBoard.presenter'


export default function DetailBoard () {
const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  })


  // 수정하기
  const onClickEdit = (event) => {
    router.push(`/boards/detailBoard/${router.query.boardId}/edit`)
  }

  // 삭제하기
  const onClickDelete = (event) => {
    // alert(event.target.id)
  }

  // 목록으로 

  const onClickBoardsList = () => {
    router.push(`/boards`)
  }
  

  return (
    <DetailBoardUi 
    data={data}
    onClickEdit={onClickEdit}
    onClickDelete={onClickDelete}
    onClickBoardsList={onClickBoardsList}
     />

  )
}