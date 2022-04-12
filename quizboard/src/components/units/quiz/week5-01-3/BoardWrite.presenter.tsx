import { useRecoilState } from "recoil"
import { isEditState } from "../../../../commons/store";

export default function RecoilPresenterPage () {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <div>
    <h1>{isEdit ? "수정하기" : "등록하기"}</h1>
  </div>
}