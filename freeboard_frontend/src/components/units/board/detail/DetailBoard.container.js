import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD } from './DetailBoard.queries'
import DetailBoardUi from './DetailBoard.presenter'


export default function DetailBoard () {
const router = useRouter()
  console.log("router", router)

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  })

  console.log(data)

  

  return (
    <DetailBoardUi data={data}></DetailBoardUi>

  )
}