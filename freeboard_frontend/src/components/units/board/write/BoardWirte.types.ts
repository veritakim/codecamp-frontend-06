import { ChangeEvent } from "react";

export interface MyRegisterBtnProps {
  isActive: boolean;
}

export interface IBoardWriteUiProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePass: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddrDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChageYoutue: (event: ChangeEvent<HTMLInputElement>) => void;
  onComplete: any;
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
  handleComplete: any;
  isOpen: boolean;
  setToggle: ()=>void;
  zipcode: string;
  addr: string;
}

export interface IBoardEditVariables {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  }
}
