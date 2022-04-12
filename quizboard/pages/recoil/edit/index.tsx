import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import RecoilContainerPage from "../../../src/components/units/quiz/week5-01-3/BoardWrite.container copy";

export default function RecoilPage () {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true)
  }, [])

  return <RecoilContainerPage />
}