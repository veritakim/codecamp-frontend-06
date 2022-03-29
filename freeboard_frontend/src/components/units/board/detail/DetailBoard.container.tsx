import { useQuery, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD} from "./DetailBoard.queries";
import DetailBoardUi from "./DetailBoard.presenter";

export default function DetailBoard() {
  const router = useRouter();
  const [likeCount, setLikeCount] = useState();
  const [disLikeCount, setDisLikeCount] = useState();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

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
  
  // 좋아요
  const onClickLike = async() => {
    const likeResult = await likeBoard({
      variables: {
        boardId: router.query.boardId
      }
    })

    // console.log("like", likeResult.data.likeBoard);
    setLikeCount(likeResult.data.likeBoard)
  } 

  // 싫어요

  const onClickDisLike = async () => {
    const dislikResult = await dislikeBoard({
      variables: {
        boardId: router.query.boardId
      }
    })

    // console.log("result", dislikResult.data.dislikeBoard)
    setDisLikeCount(dislikResult.data.dislikeBoard)
  }



  return (
    <DetailBoardUi
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickBoardsList={onClickBoardsList}
      onClickLike={onClickLike}
      onClickDisLike={onClickDisLike}
      likeCount={likeCount}
      disLikeCount={disLikeCount}
    />
  );
}
