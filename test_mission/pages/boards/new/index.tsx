import { useState } from "react";
import WriteBoardContainer from "../../../src/components/boards/write/WriteBoard.container";

export default function WritePage () {
  const [isEdit] = useState(false)


  return <WriteBoardContainer isEdit={isEdit}/>
}