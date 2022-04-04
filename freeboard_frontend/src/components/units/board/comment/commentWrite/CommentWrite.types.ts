// import { valueType } from "antd/lib/statistic/utils";
import { ChangeEvent, MouseEvent } from "react";

export interface CommentWriteUiProps {
  onChangeCommentWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  commentRegister: (event: MouseEvent<HTMLButtonElement>) => void;
  handleChange: (valueType: any) => void;
  writer: string;
  contents: string;
  password: string;
  rating: number;
  el: any;
  isEdit: boolean;
  commentUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
} 

export interface CommentWriteProps {
  el: any;
  isEdit: boolean;
  setIsEdit: any;
}

