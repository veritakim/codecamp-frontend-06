import { FETCH_BOARDS_OF_THE_BEST } from "./BoardOfBest.queries";
import { useQuery } from "@apollo/client";
import BoardOfBestUi from "./BoardOfBest.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardOfBest() {
  const {data} = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const router = useRouter();

  const onClickMovePage = (event: MouseEvent<HTMLDivElement>) => {

    if(event.target instanceof Element) {
      router.push(`/boards/detailBoard/${event.currentTarget.id}`)
    }
  }

  return (
    <BoardOfBestUi 
    data={data} 
    onClickMovePage={onClickMovePage}
    />
  );
}
