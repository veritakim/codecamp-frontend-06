import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"
import Image from "next/image"
import { ChangeEvent, MouseEvent, useRef, useState } from "react"
import { checkFileValidation } from "../../src/commons/types/generated/libraries/validation"
import { IMutation, IMutationCreateBoardArgs, IMutationUploadFileArgs } from "../../src/commons/types/generated/types"
import {LikeOutlined} from '@ant-design/icons'

const CREATE_BOARD = gql`
 mutation createBoard ($createBoardInput: CreateBoardInput!) {
   createBoard(createBoardInput : $createBoardInput) {
     _id
     writer
     title
     contents
     images
   }
 }
`

const UPLOAD_FILE = gql`
  mutation uploadFile ($file: Upload!) {
    uploadFile(file: $file){
      url
    }
  }
`

const LikeBox = styled(LikeOutlined)`
  width: 120px;
  height: 120px;
  color: #f7be04;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Text1 = styled.div``
const Text2 = styled.div``
const ImgDiv = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid black;
  overflow: hidden;
`
const MapImg = styled.div`
  width: 100%;
  display: flex;
`

export default function ImgUploadQuiz() {
  const fileRef = useRef<HTMLInputElement>(null)
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE)

  const [imgData, setImgDate] = useState([]);

  const [writer, setWriter] = useState("")
  const [contents, setContents] = useState("")
  const [title, setTitle] = useState("")
  const [password, setPassword] = useState("")

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value)
  }
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
  }
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {

    setContents(event.target.value)
  }

  const onClickSubmit = async (evet: MouseEvent<HTMLButtonElement>) => {
    // alert(imgData)
   
    const result = await createBoard({
      variables: {
        createBoardInput: {
        writer,
        password,
        title,
        contents,
        images: imgData
        }
      }
    })
    console.log(result)
    alert("등록되었습니다.")
  }

  const onClickImage = () => {
    fileRef.current?.click();
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    const isValid = checkFileValidation(file);
    if(!isValid) return;

    try{
      const result = await uploadFile({variables: {file}})
    
      setImgDate(imgData => [...imgData, result.data?.uploadFile.url])

    } catch (error) {
      alert(error.message)
    }
    console.log(imgData)
  }
  return (
    <div>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter}/>
      </div>
      <div>
        비밀번호 : <input type="password" onChange={onChangePassword}/>
      </div>
      <div>
        제목 : <input type="text" onChange={onChangeTitle}/>
      </div>
      <div>
        내용 : <input type="text" onChange={onChangeContents} />
      </div>
      <MapImg>
          {imgData.map((e, i) => (
            <ImgDiv key={i}>
              <img width={200} height={200} src={`https://storage.googleapis.com/${e}`} alt="img"/> 
            </ImgDiv>
          ))}
        <LikeBox onClick={onClickImage}>
          <Text1>Upload</Text1>
          <Text2>+</Text2>
        </LikeBox>
      </MapImg>
      <input style={{display: "none"}} type="file" onChange={onChangeFile} ref={fileRef}/>
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  )
}