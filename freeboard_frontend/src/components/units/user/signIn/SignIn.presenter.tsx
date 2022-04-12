
export default function SignInPresenter (props: any) {

  return (
    <div>
      <h1>회원가입</h1>
      <div>이메일: <input type="text" onChange={props.onChangeEmail} /></div>
      <div>비밀번호: <input type="password" onChange={props.onChangePassword} /></div>
      <div>이름: <input type="text" onChange={props.onChangeName} /></div>

      <button onClick={props.onClickSubmit}>등록하기</button>
    </div>
  )
}