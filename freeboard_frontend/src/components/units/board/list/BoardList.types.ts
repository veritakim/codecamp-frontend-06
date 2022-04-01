import {  MouseEvent } from "react";
export interface BoardListUiProps {
  data: any;
  onClickDetailMove: (event: MouseEvent<HTMLDivElement>) => void;
  MoveWritePage: () => void;
  clickMovePage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickNext: (event: MouseEvent<HTMLButtonElement>) => void;
  startPage: number;
  lastPage: number;
  currentPage: number;
}
