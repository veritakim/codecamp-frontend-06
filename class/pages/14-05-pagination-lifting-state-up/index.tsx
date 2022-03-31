import Board from '../../src/components/units/board/14-board-pagination/Board'
import Pagination from '../../src/components/units/board/14-board-pagination/Pagination'
import { gql, useQuery } from "@apollo/client"


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
  const {data, refetch} = useQuery(FETCH_BOARDS)
  
  const {data: databoardsCount} = useQuery(FETCH_BOARDS_COUNT);  
  const lastPage = Math.ceil(databoardsCount?.fetchBoardsCount / 10)

  return (
    <div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
    
  )
}

