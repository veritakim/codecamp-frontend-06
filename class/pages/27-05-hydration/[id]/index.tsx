import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import Dompurify from 'dompurify'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    } 
  }
`

export default function WebEditorDetailPage () {
  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id
    }
  })

  return (
    <div>
  
      <div style={{color: "red"}}>작성자 : {data?.fetchBoard.writer}</div>
      <div style={{color: "green"}}>제목 : {data?.fetchBoard.title}</div>
      {/* <div>내용 : {data?.fetchBoard.contents}</div> */}
      {/* 내용의 태그를 그대로 인식시키게 해주기 */}
      {typeof window !== "undefined" ? (
        <div style={{color: "blue"}} dangerouslySetInnerHTML={
          {__html: Dompurify.sanitize(data?.fetchBoard.contents)}
        }></div>
      )
      :
       ( <div style={{color: "blue"}}></div>)
      }
      <div style={{color: "orange"}}>상품가격 : </div>
    </div>
  )
}


