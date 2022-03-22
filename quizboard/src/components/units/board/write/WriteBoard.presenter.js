
export default function WriteBoardUi (props) {
  return (
  <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={props.onChangeWriter}/> <br />
      제목: <input type="text" onChange={props.onChangeTitle}/> <br />
      내용: <input type="text" onChange={props.onChangeContents}/> <br />

      <button onClick={props.callGraphqlApi} disabled={props.disabled}>GRAPHQL-API 요청하기!</button>
    </div>
  )
}