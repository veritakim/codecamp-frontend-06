import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import DetailBoardUi from "./DetailBoard.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./DetailBoard.queris";

export default function DetailBoardContainer () {

  const router = useRouter();
  const [isDelete, setDelete] = useState(false)
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const [password, setPassword] = useState("")

  console.log(router.query.boardId)

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  });

  // 삭제 상태창 바꾸는 함수
  const deleteState = () => {
    // setDelete(true)
    router.push(`/boards/${router.query.boardId}/delete`)
  }

  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  
  // 삭제 취소


  // update
  const updateBoard = (e) => {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  const onclickList = () => {
    router.push('/boards')
  }

  return <DetailBoardUi 
            data={data} 
            deleteState={deleteState}
            updateBoard={updateBoard}
            onChangePassword={onChangePassword}
            onclickList={onclickList}
            isDelete={isDelete}
            />
}