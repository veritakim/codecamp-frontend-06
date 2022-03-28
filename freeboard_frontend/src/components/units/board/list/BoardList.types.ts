import { ChangeEvent, MouseEvent } from "react";
export interface BoardListUiProps {
  data: any;
  onClickDetailMove: (event: MouseEvent<HTMLDivElement>) => void;
  MoveWritePage: () => void;
}
