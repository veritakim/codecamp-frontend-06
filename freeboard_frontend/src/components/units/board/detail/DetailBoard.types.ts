import { MouseEvent } from "react";

export interface DetailBoardUiProps {
  data: any;
  onClickBoardsList: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEdit: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  data2: any;
}
