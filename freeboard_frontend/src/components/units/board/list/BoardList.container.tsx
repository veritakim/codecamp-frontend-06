import BoardListUi from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import _ from 'lodash'

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  // page
  const {data: boardsCount} = useQuery(FETCH_BOARDS_COUNT);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(boardsCount?.fetchBoardsCount / 10)

  const onClickDetailMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/boards/detailBoard/${event.currentTarget.id}`);
    }
  };

  const MoveWritePage = () => {
    router.push(`/boards/new`);
  };

  // pagination
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

  /* 검색 */
  const [word, setWord] = useState("")
  
  const getDebounce = _.debounce((e) => {
    refetch({search: e, page: 1})
    setWord(e)
  }, 200)
  
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value)
    // console.log("검색", event.target.value)
  }

  return (
    <BoardListUi
      data={data}
      onClickDetailMove={onClickDetailMove}
      MoveWritePage={MoveWritePage}
      clickMovePage={clickMovePage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      startPage={startPage}
      lastPage={lastPage}
      currentPage={currentPage}
      onChangeSearch={onChangeSearch}
      word={word}
    ></BoardListUi>
  );
}
