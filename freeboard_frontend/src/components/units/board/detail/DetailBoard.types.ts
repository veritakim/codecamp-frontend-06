import { MouseEvent } from "react";

export interface DetailBoardUiProps {
  data: any;
  onClickBoardsList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickLike: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDisLike: (event: MouseEvent<HTMLDivElement>) => void;
  likeCount: any;
  disLikeCount: any;
}
