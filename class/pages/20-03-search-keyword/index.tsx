import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { ChangeEvent, useState } from 'react'
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types'
import _ from 'lodash'
import {v4 as uuidv4} from 'uuid'

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

interface IProps{
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => props.isMatched ? "red": "black"};
`

export default function SearchKeywordPage () {
  // 검색하고 색상을 주려고 위한
  const [keyword, setKeyword] = useState("")

  const {data, refetch} = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS)
    // console.log(data)

  const getDebounce = _.debounce((e) => {
    refetch({search: e, page: 1})
    setKeyword(e)
  }, 200)

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)    
  }

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) })
  }

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChageSearch} />
      {data?.fetchBoards.map( (el, index) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title.replaceAll(keyword, `#$%${keyword}#$%`)
                              .split("#$%")
                              .map((el) => (<Word key={uuidv4()} isMatched={keyword === el}>{el}</Word>))}</MyColumn>
        </MyRow>
      ))}
       {

        new Array(10).fill(1).map((_, index) => (
            <span onClick={onClickPage} key={index + 1} id={String(index + 1)}>{index + 1}</span>

        ))
      }
    </div>
    
  )
}

