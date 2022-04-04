import { MouseEvent } from "react";

export interface BoardOfBestUiProps {
  data: any;
  onClickMovePage:(event: MouseEvent<HTMLDivElement>) => void;
}
