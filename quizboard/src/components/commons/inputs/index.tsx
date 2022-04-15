import { UseFormRegisterReturn, UseFormStateReturn } from "react-hook-form";

interface IInputsProps {
  type?: "text" | "password"
  register?: UseFormRegisterReturn
}

export default function Input01 (props: IInputsProps) {


  return (
    <input type={props.type} {...props.register} />
  )
} 