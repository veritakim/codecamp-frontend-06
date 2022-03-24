// 수정 페이지
// 페치보드 하기
import BoardWrite from "../../../../src/components/units/board/09-board-write/BoardWrite.Container"
import {useQuery, gql} from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql `
  query fetchBoard($number: Int){
  fetchBoard(number: $number){
    writer
    title
    contents
    like
    number
  }
}
`


export default function BoardEditage () {

const router = useRouter()

const {data} = useQuery(FETCH_BOARD, {
  variables: {
    number: Number(router.query.number)
  }
})

  return <BoardWrite isEdit={true} data={data} />
}