import { FETCH_BOARDS_OF_THE_BEST } from "./BoardOfBest.queries";
import { useQuery } from "@apollo/client";
import BoardOfBestUi from "./BoardOfBest.presenter";

export default function BoardOfBest() {
  const {data} = useQuery(FETCH_BOARDS_OF_THE_BEST);
  

  return (
    <BoardOfBestUi data={data} />
  );
}
