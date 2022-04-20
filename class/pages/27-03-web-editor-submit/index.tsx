import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { Modal } from 'antd';

const CREATE_BOARD = gql`
  mutation createBoard ($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  } 

`

// 여기서 리액트 퀼을 임폴트                                  // 서버사이드에서는 렌더링 하지 않겠다.
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) 
const ReactQuillDiv = styled(ReactQuill)`
  width: 800px;
  height: 500px;

`

export default function WebEditorHookFormPage () {
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const router = useRouter()

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange"
  })


  // 이벤트가 들어오지 않는다
  const onChangeContents = (value: string) => {
    
    // register로 등록하지 않고 강제로 값을 넣어주기. 빈값처리
    setValue("contents", value === "<p><br></p>" ? "" : value)
    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents")
  }

  const onClickSubmit = async (data) => {
    if (!data.writer && !data.password && !data.title && !data.contents) {
      alert("모두 입력해주세요")
      return;
    } 

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents
          }
        }
      })

      router.push(`/27-04-web-editor-detail/${result.data.createBoard._id}`)

    } catch (error) {
      Modal.error({content: error.message})
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} /> <br/>
        비밀번호: <input type="password" {...register("password")} /> <br/>
        제 목 : <input type="text" {...register("title")} /> <br/>
        내 용 : <ReactQuillDiv onChange={onChangeContents}/><br/>
        
        <button>등록하기</button>
      </form>
    </div>
  )
}