import styled from "@emotion/styled"

interface IProps {
  isActive: boolean
  title?: string
}

const Btn = styled.button`
height: 52px;
width: 179px;
background-color: ${(props: IProps) => (props.isActive ? "#FFD600" : "none")};
border: none;
font-size: 16px;
cursor: pointer;
`

export default function Button01 (props: IProps) {

  return <Btn isActive={props.isActive}>{props.title}</Btn>
}