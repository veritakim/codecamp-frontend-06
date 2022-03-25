import {useQuery, gql, useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD, DELETE_BOARD} from './DetailBoard.queries'
import DetailBoardUi from './DetailBoard.presenter'


export default function DetailBoard () {
  const router = useRouter()
  

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  })
  const [deleteBoard] = useMutation(DELETE_BOARD)
  

  // 수정하기
  const onClickEdit = () => {
    router.push(`/boards/detailBoard/${router.query.boardId}/edit`)
  }

  // 삭제하기
  const onClickDelete = () => {
    deleteBoard({
      variables: {
        boardId: router.query.boardId
      }
    })
    alert("게시물이 삭제되었습니다.")
    router.push(`/boards`)
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