import {Modal} from 'antd'

export default function ModalAlertPage () {

  const onClickSuccessBtn = () => {
    // 괄호 안에 내용을 채워 넣는다
    Modal.success({content: "게시물 등록에 성공했습니다."})
  }

  const onClickFailBtn = () => {
    Modal.error({content: "비밀번호가 틀렸습니다."})
  }

  return (
    <div>
      <button onClick={onClickSuccessBtn}>성공했을 때</button>
      <button onClick={onClickFailBtn}>실패했을 때</button>
    </div>
  )
}