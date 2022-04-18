import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD } from "../../../../src/components/boards/detail/DetailBoard.queris";
import WriteBoardContainer from "../../../../src/components/boards/write/WriteBoard.container";




export default function EditPage () {
  const [isEdit] = useState(true)
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    }
  }) 

  return <WriteBoardContainer isEdit={isEdit} data={data}/>
}