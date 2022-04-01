import { gql, useQuery } from "@apollo/client";
import InfiniteUi from "./infinite.presenter";


const FETCH_BOARDS = gql`
 query fetchBoards($page: Int) {
   fetchBoards(page: $page) {
     _id
     writer
     title
   }
 }
`

export default function Infinitecontainer () {
  const {data, fetchMore} = useQuery(FETCH_BOARDS);

  const loadFunc = () => {
    if(!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10) + 1
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if(!fetchMoreResult.fetchBoards) {
          return {fetchBords: [...prev.fetchBoards]}
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
        }
      }
    })
  }




  return (
  <InfiniteUi 
  data={data}
  loadFunc={loadFunc}
  />
)
}