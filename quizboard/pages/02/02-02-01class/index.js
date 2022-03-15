export default function ClassCountPage () {

  function countPlus () {
    let num = Number(document.getElementById("countNumber").innerText)

    document.getElementById("countNumber").innerText = num + 1

  }

  
  return (
    <div>
      <div id="countNumber">0</div>
      <button onClick={countPlus}>카운트 증가</button>
    </div>
  )
}