
export default function BoardListlUI (props) {

  return (
    <div>
      <button onClick={props.onClickMove1}>83011번 게시글로 이동하기</button>
      <button onClick={props.onClickMove2}>83012번 게시글로 이동하기</button>
      <button onClick={props.onClickMove3}>83013번 게시글로 이동하기</button>
    </div>

  )
}