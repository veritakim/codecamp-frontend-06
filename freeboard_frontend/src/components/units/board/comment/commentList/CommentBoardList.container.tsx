import { useQuery} from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "./CommentBoardList.queries";
import CommentBoardListUi from "./CommentBoardList.presenter";

export default function CommentListBoard() {
  const router = useRouter();

    // 댓글 가져오기
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });


  return (
    <CommentBoardListUi data={data} />
  );
}
