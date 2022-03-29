// 수정페이지 write 컨테이너로 넘겨줄 것.
import BoardWritePage from "../../../../../src/components/units/board/write/BoardWrite.container";
import { FETCH_BOARD } from "../../../../../src/components/units/board/write/BoardWrite.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../../src/commons/types/generated/types";

export default function BoardEdit() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  return <BoardWritePage isEdit={true} data={data} />;
}
