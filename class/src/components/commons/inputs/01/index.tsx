import styled from "@emotion/styled"
import { UseFormRegisterReturn } from "react-hook-form"

const Input = styled.input``

interface IPropsInputs {
  type?: "text" | "password"
  register?: UseFormRegisterReturn
}

export default function Inputs01 (props: IPropsInputs) {

  return <Input type={props.type} {...props.register}/>
}