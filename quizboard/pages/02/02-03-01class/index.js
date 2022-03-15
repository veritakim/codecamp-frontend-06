export default function AuthNumber ( ) {

  function makeRandom () {
    
    let random = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    
    // document.getElementById("btn").disabled = true;

    document.getElementById("randomNum").innerText = random;
  }

  return (
    <div>
      <div id="randomNum">000000</div>
      <button id="btn" onClick={makeRandom}>인증번호 전송</button>
    </div>

  )
}