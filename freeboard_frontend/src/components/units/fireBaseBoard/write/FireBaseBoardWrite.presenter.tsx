import FireBaseBoardList from "../list/FireBaseBoardList.container";

export default function FireBaseBoardWriteUi (props: any) {

  return (
    <div>
      <div>작성자: <input type="text" value={props.writer} readOnly /></div>
      <div>비밀번호: <input type="password" onChange={props.onChangePass} /></div>
      <div>제목: <input type="text" onChange={props.onChangeTitle} /></div>
      <div>내용: <textarea onChange={props.onChangeContent} /></div>

      <button onClick={props.onClickSubmit}>등록하기</button>
      <FireBaseBoardList count={props.count} />
    </div>
  )
}