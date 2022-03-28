import { ChangeEvent, IframeHTMLAttributes, MouseEventHandler } from "react";

export interface MyRegisterBtnProps {
  isActive: boolean;
}

export interface IBoardWriteUiProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePass: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeZipCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddr: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddrDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChageYoutue: (event: ChangeEvent<HTMLInputElement>) => void;
  data?: any;
  isEdit: boolean;
  nameError: String;
  passWordError: String;
  titleError: String;
  contentError: String;
  addrError: String;
  addrDetailError: String;
  boardEdit: () => void;
  signCheck: any;
  isActive: boolean;
}

export interface IBoardEditVariables {
  title?: string;
  contents?: string;
  password: string;
  boardId: any;
}
