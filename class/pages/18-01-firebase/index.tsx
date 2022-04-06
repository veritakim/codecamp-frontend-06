import {collection, getFirestore, addDoc, getDocs} from 'firebase/firestore/lite'
import { firebaseApp } from '../_app'

export default function FirebasePage () {

  const onClickSubmit = async() => {
    // firebase에 데이터 한 줄 등록하기
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board,{
      writer: "지성",
      title: "안줌",
      contents: "안줌입니다."
    })
  }

  const onClickFetch = async() => {
    // firebase에서 데이터 꺼내오기

    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board)
    const datas = result.docs.map((el) => el.data())
    
    console.log(datas)
  }

  return(
    <>
     <div>파이어 베이스 연습</div>
     <button onClick={onClickSubmit}>등록하기</button>
     <button onClick={onClickFetch}>조회하기</button>
    </>
  )
}