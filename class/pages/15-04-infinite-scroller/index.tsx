import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import InfiniteScroll from 'react-infinite-scroller';


const FETCH_BOARDS = gql `
  query fetchBoards ($page: Int) {
        fetchBoards (page: $page) {
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

const Mydiv = styled.div`
  height:700px;
  overflow:auto;  

`

export default function InfiniteScrollerPage () {
           
  const {data, fetchMore} = useQuery(FETCH_BOARDS)

  // 추가 패치 (패치모어)를 해줘야한다.
  const onLoadMore = () => {
    // 만약 데이터가 없다면.. 리턴해!
    if (!data) return;

    fetchMore({
      variables: {// 페이지를 먼저 받아야한다
        page: Math.ceil(data.fetchBoards.length / 10) + 1  // 총 페이지 갯수 + 1  => 4페이지가 들어온다.
      },
      updateQuery: (prev, {fetchMoreResult}) => { // useQuery를 수정하는 부분
        // 4페이지를 요청했는데 없다면
        if (!fetchMoreResult.fetchBoards) {

          return {fetchBords: [...prev.fetchBoards]}
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
        }
      }
    })
  }
  return (
    <Mydiv>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true} useWindow={false} >
        {data?.fetchBoards.map( (el) => (
          <MyRow key={el._id}>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        ))}
      </InfiniteScroll>
    </Mydiv>

    
  )
}

