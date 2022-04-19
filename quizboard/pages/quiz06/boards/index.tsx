import { gql, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import { IBoard } from "../../../src/commons/types/generated/types"
import FetchBoardsItems from "../../../src/components/units/board/week6/boards/items"
const FETCH_BOARDS = gql `
  query fetchBoards{
        fetchBoards{
          _id
          writer
          title
        }
}
`

export default function BasketPage () {
  const {data} = useQuery(FETCH_BOARDS)


 return (
   <div>
      {data?.fetchBoards.map( (el, index) => 
      (
        <FetchBoardsItems key={el._id} el={el} /> 
     ))}
   </div>
 )

}