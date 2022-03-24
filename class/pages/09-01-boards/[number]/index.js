// 상세보기
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



export default function StaticRoutedPage () {
                    // 안에는 셋팅값
  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number)
    }
  })
    console.log(data)

  const onClickMove = (event) => {
    router.push(`/09-01-boards/${router.query.number}/edit`)
  }


  return (
    <div>
      <div>{data?.fetchBoard.number}번 게시글에 오신것을 환영합니다</div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
      <button onClick={onClickMove} number={data?.fetchBoard.number}>수정하러 이동하기</button>
    </div>
    
  )
}

