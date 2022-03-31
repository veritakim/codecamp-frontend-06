import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'


const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

const FETCH_BOARDS = gql `
  query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
          _id
          writer
          title
          contents
        }
}
`


export default function PaginationPage () {
                    // 안에는 셋팅값
  const {data, refetch} = useQuery(FETCH_BOARDS)
    // console.log(data)  

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) })
  }

  return (

    <div>
      {data?.fetchBoards.map( (el: any, index: string) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{data?.fetchBoards.length - Number(index)}</MyColumn>
        </MyRow>
      ))}

      {
        // [1, 2, 3, 4, 5, 6, 7].map((el) => (
        //     <span onClick={onClickPage} key={el} id={String(el)}>{el}</span>

        // ))
        new Array(10).fill(1).map((_, index) => (
            <span onClick={onClickPage} key={index + 1} id={String(index + 1)}>{index + 1}</span>

        ))
      }
    </div>
    
  )
}

