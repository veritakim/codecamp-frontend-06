import { useQuery} from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "./CommentBoardList.queries";
import CommentBoardListUi from "./CommentBoardList.presenter";
import {IQuery, IQueryFetchBoardCommentsArgs} from "../../../../../commons/types/generated/types"
import InfiniteScroll from 'react-infinite-scroller';
import { InfiniteWrapper } from "./CommentBoardList.style";

export default function CommentListBoard() {
  const router = useRouter();
  

    // 댓글 가져오기
    const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoardComments">, IQueryFetchBoardCommentsArgs>(FETCH_BOARD_COMMENTS, {
     variables: {
            boardId: String(router.query.boardId)
          }
    })
  
    const loadFunc = () => {
     console.log("헤헷", data) 
    if(!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if(!fetchMoreResult?.fetchBoardComments) {
          return {fetchBoardComments: [...prev.fetchBoardComments]}
        }
        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
        }
      }
    })
  }
  
  


  return (
    <InfiniteWrapper style={{height: "800px", overflow: "auto"}}>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            useWindow={false}
            
        >
      {data?.fetchBoardComments.map((el: any) => 
       (
         <CommentBoardListUi 
         key={el._id} 
         el={el}
         loadFunc={loadFunc} 
         />
       )
      )}

    </InfiniteScroll>
    </InfiniteWrapper>
  );
}
