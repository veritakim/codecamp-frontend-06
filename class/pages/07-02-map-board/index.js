import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'


const FETCH_BOARDS = gql `
  query fetchBoards{
        fetchBoards{
          number
          writer
          title
          contents
        }
}
`
const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

export default function MapBoardPage () {
                    // 안에는 셋팅값
  const {data} = useQuery(FETCH_BOARDS)
    console.log(data)


  return (
    /*
    <div>
      <div>{data?.fetchBoards.number}번 게시글에 오신것을 환영합니다</div>
      <div>작성자: {data?.fetchBoards.writer}</div>
      <div>제목: {data?.fetchBoards.title}</div>
      <div>내용: {data?.fetchBoards.contents}</div>
    </div>

    map으로 바꿔보자
    */

    <div>
      {data?.fetchBoards.map( (el) => (
        <MyRow key={el.number}>
          <MyColumn><input type="checkbox" /></MyColumn>
          <MyColumn>{el.number}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{index}</MyColumn>
        </MyRow>
      ))}
    </div>
    
  )
}

