import { ChangeEvent, RefObject } from "react";

export interface IUploadProps {
  index: number;
  fileUrl: string;
  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}


export interface IUploadUiProps {
    imgData: string[]
    fileRef: RefObject<HTMLInputElement>;
    fileUrl: string;
    defaultFileUrl?: string;
    onClickUpload: () => void;
    onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  }



