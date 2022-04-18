import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../commons/types/generated/types";
import BoardsListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queris";
import InfiniteScroll from "react-infinite-scroller";

const InfiniteWrapper = styled.div``

export default function BoardsListContainer () {
  const { data, fetchMore } = useQuery<Pick<IQuery, "fetchBoards">,IQueryFetchBoardsArgs>(FETCH_BOARDS)
  const router = useRouter();
  // 페이지 이동
  const onClickMove = (event:MouseEvent<HTMLDivElement>) => {
   if (event.target instanceof Element) {
     router.push(`/boards/${event.currentTarget.id}`)
   }
  }

  const onLoadMore = () => {
    if (!data) return

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards) return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [
            ...prev.fetchBoards,
            ...fetchMoreResult.fetchBoards
          ]
        }
      }
    })
  }

  return( 
    <InfiniteWrapper style={{height: "446px", overflow: "auto"}}>
      <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
      >
      {data?.fetchBoards.map((el: any) => (
        <BoardsListUI 
         key={el._id}
         el={el}
         onClickMove={onClickMove}
         onLoadMore={onLoadMore}
      />
      ))}

      </InfiniteScroll>
    </InfiniteWrapper>
  )
}