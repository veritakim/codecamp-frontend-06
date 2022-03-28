import BoardListUi from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDetailMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(`/boards/detailBoard/${event.target.id}`);
    }
  };

  const MoveWritePage = () => {
    router.push(`/boards/new`);
  };

  return (
    <BoardListUi
      data={data}
      onClickDetailMove={onClickDetailMove}
      MoveWritePage={MoveWritePage}
    ></BoardListUi>
  );
}
