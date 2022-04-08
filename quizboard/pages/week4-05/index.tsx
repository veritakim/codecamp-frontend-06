import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin"
import { ChangeEvent, useState } from "react"
import { IQuery } from "../../src/commons/types/generated/types"
import _ from 'lodash'
import {v4 as uuid} from 'uuid'

const FETCH_BOARDS = gql`
 query fetchBoards($page: Int, $search: String) {
   fetchBoards(page: $page, search: $search) {
     _id
     writer
     title
   }
 }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const MyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const SpanDiv = styled.div`
  display: flex;
  justify-content: center;
`
const SpanNumber = styled.span`
  margin: 0 10px 0 10px;
  cursor: pointer;
`
interface IProps{
  isMatched: boolean;
}
const TitleSpan = styled.span`
  color: ${(props: IProps) => props.isMatched ? "red" : "black"};
`

const MoveBtn = styled.button``


const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount{
    fetchBoardsCount
  }
`




export default function BoardPageQuiz () {
  const {data, refetch} = useQuery(FETCH_BOARDS)
    // console.log(data);
  const {data: boardsCount} = useQuery(FETCH_BOARDS_COUNT)
  // console.log(boardsCount)
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(boardsCount?.fetchBoardsCount / 10)
  
  const [search, setSearch] = useState("")


 
  const clickMovePage = (event) => {
    refetch({page: Number(event.target.id)})
    setCurrentPage(Number(event.target.id))
  }
  const onClickPrev = () => {
    if(startPage !== 1) {
      setStartPage((prev) => prev - 10)
      refetch({ page: startPage - 10})
      setCurrentPage(startPage - 10)
    } 
  }
  
  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => (prev + 10))
      refetch({page: Number(startPage + 10)})
      setCurrentPage(startPage + 10)
    }
  }
  
  const getDebounce = _.debounce((e)=>{
    refetch({search: e, page: 1})
    setSearch(e)
  }, 200)

  const onChageSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)
  }


  return (
    <Wrapper>
      <div>검색: <input type="text" onChange={onChageSearch}/> </div>
      {data?.fetchBoards.map((el, index) => (
        <MyRow key={uuid()}>
           <div>{el.writer}</div>
           <div>{el.title.replaceAll(search, `@#$${search}@#$`)
                        .split("@#$")
                        .map((el) => (<TitleSpan key={uuid()} isMatched={search === el}>{el}</TitleSpan>))}</div>
        </MyRow>
      ))}

      <SpanDiv>
        <MoveBtn onClick={onClickPrev} disabled={startPage === 1 ? true : false} style={{color: startPage === 1 ? "gray" : "black"}}>◁</MoveBtn>
      {
        new Array(10).fill(1).map((_, index) => index + startPage <= lastPage ?(
          <SpanNumber key={index+startPage} 
                    onClick={clickMovePage} 
                    style={{color: currentPage === index + startPage ? "red" : "blue"}}
                    id={String(index + startPage)}>
                      {index + startPage}
          </SpanNumber>
          ) : "")
          
        }
        <MoveBtn onClick={onClickNext} disabled={startPage + 10 <= lastPage ? false : true} style={{color: startPage + 10 <= lastPage ? "black" : "gray"}}>▷</MoveBtn>
      </SpanDiv>
    
    </Wrapper>
  )
}