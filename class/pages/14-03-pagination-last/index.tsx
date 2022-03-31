import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { useState } from 'react'


const MyRow = styled.div`
  display: flex;
  flex-direction: row;

`
const MyColumn = styled.div`
  width: 25%;
`

const MySpan = styled.span`
  margin-left: 10px;
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
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`


export default function PaginationPage () {
                    // 안에는 셋팅값
  const {data, refetch} = useQuery(FETCH_BOARDS)
    // console.log(data)  
  const {data: databoardsCount} = useQuery(FETCH_BOARDS_COUNT);  
  
  const [startPage, setStartPage] = useState(1);

  const lastPage = Math.ceil(databoardsCount?.fetchBoardsCount / 10)
 

  const onClickPrevPage = () => {
    if(startPage !== 1) {
      setStartPage((prev) => prev - 10)
      refetch({ page: startPage - 10})
    }
  }


  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10)
      refetch({ page: startPage + 10})
    }
    
  }

  const onClickPage = (event) => {
    refetch({ page:  Number(event.target.id)})
  }

  return (

    <div>
      {data?.fetchBoards.map( (el: any, index: string) => (
        <MyRow key={el._id}>
          <MyColumn>{data?.fetchBoards.length - Number(index)}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}  

      <span onClick={onClickPrevPage}>prev◀︎</span>
      {      
        new Array(10).fill(1).map((_, index) => index + startPage <= lastPage ? (
            <MySpan onClick={onClickPage} key={index + startPage} id={String(index + startPage)}>{index + startPage}</MySpan>
        ) : (
          <span></span>
        ))
      }
      <span onClick={onClickNextPage}>►next</span>
    </div>
    
  )
}

