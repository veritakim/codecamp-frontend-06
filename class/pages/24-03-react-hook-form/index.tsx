import { useForm } from "react-hook-form"


interface IFormValues {
  writer?: string
  title?: string
  constents?: string
}

export default function ReactHookForm () {

  const {register, handleSubmit} = useForm()

  const onClickSubmit = (data: IFormValues) => {
    console.log(data)
  }

  console.log("리렌더링 체크!!!!!!")

  return (

    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")}/> 
      제목 :<input type="text" {...register("title")}/> 
      내용 : <input type="text" {...register("contents")} /> 
      주소 : <input type="text" {...register("boardAddress.addressDetail")} /> 
      <button>등록하기</button>
    </form>
  )
}