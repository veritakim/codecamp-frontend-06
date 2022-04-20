import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form'


// 여기서 리액트 퀼을 임폴트                                  // 서버사이드에서는 렌더링 하지 않겠다.
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) 
const ReactQuillDiv = styled(ReactQuill)`
  width: 800px;
  height: 500px;

`

export default function WebEditorHookFormPage () {

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange"
  })

  // 이벤트가 들어오지 않는다
  const onChangeContents = (value: string) => {
    console.log(value)
    
    // register로 등록하지 않고 강제로 값을 넣어주기. 빈값처리
    setValue("contents", value === "<p><br></p>" ? "" : value)
    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents")
  }

  return (
    <div>
      작성자 : <input type="text" {...register("writer")} /> <br/>
      비밀번호: <input type="password" {...register("password")} /> <br/>
      제 목 : <input type="text" {...register("title")} /> <br/>
      내 용 : <ReactQuillDiv onChange={onChangeContents}/><br/>
      
      <button>등록하기</button>
    </div>
  )
}