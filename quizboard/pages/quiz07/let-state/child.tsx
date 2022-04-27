import {memo} from 'react'

function ChildLetStatePage () {
  console.log("자식 렌더링이 됩니다")
  return (
    <div>
      이곳은 child 자식
    </div>
  )
}

export default memo(ChildLetStatePage)