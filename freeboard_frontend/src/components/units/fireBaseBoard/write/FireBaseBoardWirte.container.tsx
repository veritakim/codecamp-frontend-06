import { ChangeEvent, useState } from "react";
import FireBaseBoardWriteUi from "./FireBaseBoardWrite.presenter";
import {collection, getFirestore, addDoc} from 'firebase/firestore/lite'
import { firebaseApp } from "../../../../../pages/_app";
import FireBaseBoardList from "../list/FireBaseBoardList.container";

export default function FireBaseBoardWrite() {
  const [inputs, setInputs] = useState({
    writer: "true_kim",
    password: "",
    title: "",
    contents: ""
  })
  const [count, setCount] = useState(0);

  // const router = useRouter();
  const [isActive, setIsActive] = useState(false)

  function onChangePass(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      password: event.target.value
    })
    if (inputs.writer && event.target.value && inputs.title && inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      title: event.target.value
    })
    
    if (inputs.writer && inputs.password && event.target.value && inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputs({
      ...inputs,
      contents: event.target.value
    })

    if (inputs.writer && inputs.password && inputs.title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const onClickSubmit = async () => {
    if(!inputs.title && !inputs.contents && !inputs.password) {
      alert("입력된 정보가 없습니다.")
      return;
    } 
      

    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board,{
      ...inputs
    })
    setCount(prev => (prev + 1))
    // alert(count);
  }

  // FireBaseBoarsdList(count)
 
  return (
    <FireBaseBoardWriteUi
      onChangePass={onChangePass}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      isActive={isActive}
      writer={inputs.writer}
      onClickSubmit={onClickSubmit}
      count={count}
    />
  );
}
