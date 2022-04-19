import { useForm } from "antd/lib/form/Form";
import CreateProductUi from "./CreateProduct.presenter";

export default function CreateProductContainer () {
  const {register, handleSubmit} = useForm()


  return <CreateProductUi />
}