import styled from "@emotion/styled"

interface IProps {
  isActive: boolean
  title?: string
}

const Btn = styled.button`
background-color: ${(props: IProps) => (props.isActive ? "yellow" : "gray")};
`

export default function Button01 (props: IProps) {

  return <Btn isActive={props.isActive}>{props.title}</Btn>
}