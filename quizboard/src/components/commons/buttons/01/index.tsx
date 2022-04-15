interface IButtonProps {
  isEdit: boolean
}

export default function Button01 (props: IButtonProps) {

  return (
    <button>{!props.isEdit ? "등록" : "수정"}하기</button>
  )
} 