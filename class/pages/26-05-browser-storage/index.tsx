export default function BrowserStoragePage() {

  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수"
    document.cookie = "bbb=맹구"
  }

  const onClickSaveLocal = () => {
    localStorage.setItem("ccc", "유리")
  }

  const onClickSaveSession = () => {
    sessionStorage.setItem("ddd", "짱구")
  } 
  
  const onClickLoadCookie = () => {
    const myCookie = document.cookie
    console.log("cookie", myCookie)
  }

  const onClickLoadLocal = () => {
    const ccc = localStorage.getItem("ccc")
    console.log("local", ccc)
  }

  const onClickLoadSession = () => {
    const ddd = sessionStorage.getItem("ddd")
    console.log("session",ddd)
  }

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키저장</button>
      <button onClick={onClickSaveLocal}>로컬저장</button>
      <button onClick={onClickSaveSession}>세션저장</button>
      ========================
      <button onClick={onClickLoadCookie}>쿠키조회</button>
      <button onClick={onClickLoadLocal}>로컬조회</button>
      <button onClick={onClickLoadSession}>세션조회</button>
    </div>
  )
}