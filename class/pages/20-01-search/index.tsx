import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { ChangeEvent, useState } from 'react'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'


const FETCH_BOARDS = gql `
  query fetchBoards($search: String, $page: Int){
        fetchBoards(search: $search, page: $page) {
          _id
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
  const {data, refetch} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    // console.log(data)
  const [search, setSearch] = useState("")  

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }  

  const onClickSearch = () => {
    refetch({search, page: 1})
  }
  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) })
  }

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChageSearch} />
      <button onClick={onClickSearch}>검색</button>
      {data?.fetchBoards.map( (el, index) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
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

