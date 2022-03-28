import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARD_COMMENTS,
} from "./DetailBoard.queries";
import DetailBoardUi from "./DetailBoard.presenter";

export default function DetailBoard() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  // 수정하기
  const onClickEdit = () => {
    router.push(`/boards/detailBoard/${router.query.boardId}/edit`);
  };

  // 삭제하기
  const onClickDelete = () => {
    deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    alert("게시물이 삭제되었습니다.");
    router.push(`/boards`);
  };

  // 목록으로
  const onClickBoardsList = () => {
    router.push(`/boards`);
  };

  // 댓글 가져오기
  const { data: data2 } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // 댓글 작성
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  return (
    <DetailBoardUi
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickBoardsList={onClickBoardsList}
      data2={data2}
    />
  );
}
