import {useQuery, gql} from '@apollo/client'


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


export default function StaticRoutedPage () {
                    // 안에는 셋팅값
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: 83012
    }
  })
    console.log(data)


  return (
    <div>
      <div>{data?.fetchBoard.number}번 게시글에 오신것을 환영합니다</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </div>
    
  )
}

