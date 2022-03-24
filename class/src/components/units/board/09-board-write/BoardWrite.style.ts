import styled from '@emotion/styled'
import { ISubmitButtonProps } from './BoardWrite.types'



// props를 통해서 색깔 바꿔보기
export const SubmitButton = styled.button`
  background-color: ${(props: ISubmitButtonProps) => props.isActive ? "yellow" : "none"};
`


export const WriterInput = styled.input`
  border-color: green;
`

