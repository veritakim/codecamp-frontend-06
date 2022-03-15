export default function ClassHello () {

  function onClickHello () {
    let btn = document.getElementById("btn").innerText;
    // console.log(btn);
    document.getElementById("btn").innerText = "반갑습니다";
  }

  return (
    <button id="btn" onClick={onClickHello}>안녕하세요</button>
  )
}