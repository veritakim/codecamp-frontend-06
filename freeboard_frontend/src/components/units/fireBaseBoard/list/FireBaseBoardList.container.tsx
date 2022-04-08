import {useEffect} from "react";
import {collection, getFirestore, getDocs} from 'firebase/firestore/lite'
import { firebaseApp } from "../../../../../pages/_app";
import FireBaseBoardListUi from "./FireBaseBoardList.presenter";

export default function FireBaseBoardList(props: any) {
  // const [data, setData]= [{}]
  useEffect(() => {
    const fetchFireBaseList = async() => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board)
      const datas = result.docs.map((el) => el.data())
      // setData((data) => {...data, })
      console.log(datas)
    }
    fetchFireBaseList()
    
  }, [props.count]);
  return (
    <FireBaseBoardListUi
      // datas={datas}
    />
  );
}
