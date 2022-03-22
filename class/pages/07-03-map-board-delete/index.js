import {useQuery, gql, useMutation} from '@apollo/client'
import styled from '@emotion/styled'
import { Fragment } from 'react'


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

// 삭제하기
const DELETE_BOARD = gql`
mutation deleteBoard($number: Int) {
  deleteBoard(number: $number) {
    message
  }
}

`


const Row = styled.div`
  display: flex;
  flex-direction: row;

`
const Column = styled.div`
  width: 20%;
`

export default function MapBoardPage () {
                    // 안에는 셋팅값
  const {data} = useQuery(FETCH_BOARDS)
    console.log(data)

  // 삭제하기
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id)},
      refetchQueries: [{query: FETCH_BOARDS}]
    })
  }

  return (
    <Fragment>
      {data?.fetchBoards.map( (el) => (
        <Row key={el.number}>
          <Column><input type="checkbox" /></Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>
             <button onClick={onClickDelete} id={el.number}>삭제하기</button>
          </Column>
        </Row>
      ))}
    </Fragment>
    
  )
}

