// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

// 여기서 리액트 퀼을 임폴트                                  // 서버사이드에서는 렌더링 하지 않겠다.
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false}) 
const ReactQuillDiv = styled(ReactQuill)`
  width: 800px;
  height: 500px;

`

export default function WebEditorPage () {

  // 이벤트가 들어오지 않는다
  const onChangeContents = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      작성자 : <input type="text" /> <br/>
      비밀번호: <input type="password" /> <br/>
      제 목 : <input type="text" /> <br/>
      내 용 : <ReactQuillDiv onChange={onChangeContents}/><br/>
      
      <button>등록하기</button>
    </div>
  )
}