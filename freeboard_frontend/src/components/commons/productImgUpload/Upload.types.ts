import { ChangeEvent, RefObject } from "react";

export interface IUploadProps {
  index?: number;
  fileUrl?: string;
  fileUrls?: any
  setFileUrls?: any;
  defaultFileUrl?: string;
  onChangeFileUrls?: (fileUrl: string, index: number) => void;
  onChangeFile?: (fileUrl: string, index: number) => void;
}


export interface IUploadUiProps {
    el: any
    i: number
    imgData?: string[]
    imgUrl?: string[]
    fileRef: RefObject<HTMLInputElement>;
    fileUrl?: string;
    fileUrls?: string[]
    defaultFileUrl?: string;
    onClickUpload: () => void;
    onChangeFile: (arg: number) => (event: ChangeEvent<HTMLInputElement>) => void;
  }



