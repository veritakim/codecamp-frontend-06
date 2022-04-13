
export default function LoginPresenter (props: any) {

  return (
    <div>
      <h1>로그인</h1>
      <div>이메일: <input type="text" onChange={props.onChangeEmail} /></div>
      <div>비밀번호: <input type="password" onChange={props.onChangePassword} /></div>
      <button onClick={props.onClickSubmit}>로그인 하기</button>
    </div>
  )
}