import { ChangeEvent, useState } from "react"

export default function ImageUploadPreviewPage() {
  const [imgUrl, setImgUrl] = useState("")

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      alert("파일이 없습니다")
      return 
    }

    const fileReader = new FileReader()
    // file을 url형태로 만들어준다
    fileReader.readAsDataURL(file)
    // 읽어진 결과물이 들어온다
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result) 
        setImgUrl(data.target?.result )
      }
    }
  } 

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imgUrl} />
    </div>
  )
}