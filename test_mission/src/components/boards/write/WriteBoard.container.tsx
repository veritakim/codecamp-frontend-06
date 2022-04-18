import { useMutation } from "@apollo/client";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import WriteBoardUi from "./WriteBoard.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./WriteBoard.queris";

export default function WriteBoardContainer (props) {
  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [fileUrls, setFileUrls] = useState(["", "", ""])
  const router = useRouter()

  const [inputs, setInputs] = useState({
    title: "",
    writer: "",
    contents: "",
    password: "",
  })


  const onChangeTitle = (e) => {
    setInputs({
      ...inputs,
      title: e.currentTarget.value
    })
  }
  const onChangeContents = (e) => {
    setInputs({
      ...inputs,
      contents: e.currentTarget.value
    })
  }
  const onChangeWriter = (e) => {
    setInputs({
      ...inputs,
      writer: e.currentTarget.value
    })
  }
  const onChangePassword = (e) => {
    setInputs({
      ...inputs,
      password: e.currentTarget.value
    })
  } 
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async() => {
    if(!inputs.title) alert("제목을 입력해야합니다") 
    if(!inputs.contents) alert("내용을 입력해야합니다") 
    if(!inputs.writer) alert("작성자를 입력해야합니다") 
    if(!inputs.password) alert("비밀번호를 입력해야합니다") 
    inputs.images = fileUrls
    
    if(inputs.title && inputs.contents && inputs.writer && inputs.password) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: inputs
          }
        })
        alert("글이 등록 되었습니다")
        router.push(`/boards/${result.data.createBoard._id}`)

      } catch (e) {
        alert(e.message)
      }
    }
  }

  const onClickUpdate = async() => {
    const updateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;

    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      updateBoard({
        variables: {
          updateBoardInput: updateBoardInput,
          password: inputs.password,
          boardId: String(router.query.boardId)
        }
      })
      alert("글 수정이 완료되었습니다")
      router.push(`/boards/${router.query.boardId}`)

    } catch (e) {
      alert(e.message)
    }
  } 

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);


  const onClickCancel = () => {
    if(!router.query.boardId) {
      router.push('/boards')
    } else {
      router.push(`/boards/${router.query.boardId}`)
    }
  }

  return <WriteBoardUi 
             onChangeTitle={onChangeTitle}
             onChangeContents={onChangeContents}
             onChangeWriter={onChangeWriter}
             onChangePassword={onChangePassword}
             onClickSubmit={onClickSubmit}
             isEdit={props.isEdit}
             data={props.data}
             onClickUpdate={onClickUpdate}
             onChangeFileUrls={onChangeFileUrls}
             fileUrls={fileUrls}
             onClickCancel={onClickCancel}
             isDel={props.isDel}
            />
}