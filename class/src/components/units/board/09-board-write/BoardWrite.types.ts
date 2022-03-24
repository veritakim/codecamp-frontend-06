import { ChangeEvent } from "react" 

// 컨테이너 타입
export interface iMyVariables {
  number: number,
  writer?: string,
  title?: string,
  contents?: string
}


export interface IBoardWriteProps {
  isEdit: boolean
  data?: any
}


// 
export interface IBoardWriteUiProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void  // 아무것도 리턴을 안하면 void
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void  
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  callGraphqlApi: () => void
  isActive: boolean
  isEdit: boolean
  onClickUpdate: () => void
  data?: any
}


export interface ISubmitButtonProps {
  isActive: boolean
}

