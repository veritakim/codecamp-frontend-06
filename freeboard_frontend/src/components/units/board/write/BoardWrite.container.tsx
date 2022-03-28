import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUi from "./BoardWirte.presenter";
import { IBoardEditVariables, IBoardWriteUiProps } from "./BoardWirte.types";

export default function BoardWritePage(props: IBoardWriteUiProps) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addr, setAddr] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  const [youtube, setYoutube] = useState("");

  const [nameError, setNameError] = useState("");
  const [passWordError, setPassWordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [addrError, setAddrError] = useState("");
  const [addrDetailError, setAddrDetailError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value) {
      setNameError("");
    }
    if (event.target.value && password && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePass(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value) {
      setPassWordError("");
    }
    if (writer && event.target.value && title && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleError("");
    }
    if (writer && password && event.target.value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value) {
      setContentError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeZipCode(event: ChangeEvent<HTMLInputElement>) {
    setZipcode(event.target.value);
  }

  function onChangeAddr(event: ChangeEvent<HTMLInputElement>) {
    setAddr(event.target.value);
  }

  function onChangeAddrDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddrDetail(event.target.value);
  }

  function onChageYoutue(event: ChangeEvent<HTMLInputElement>) {
    setYoutube(event.target.value);
  }

  const signCheck = async () => {
    if (!writer) {
      setNameError("이름을 입력해주세요");
    }

    if (!password) {
      setPassWordError("비밀번호를 입력해주세요");
    }

    if (!title) {
      setTitleError("제목을 입력해주세요");
    }

    if (!content) {
      setContentError("내용을 입력해주세요");
    }

    if (!addr) {
      setAddrError("주소를 입력해주세요");
    }

    if (!addrDetail) {
      setAddrDetailError("상세 주소를 입력하세요");
    }

    if (writer !== "" && password !== "" && title !== "" && content !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: title,
              contents: content,
              youtubeUrl: youtube,
              boardAddress: {
                zipcode: zipcode,
                address: addr,
                addressDetail: addrDetail,
              },
            },
          },
        });

        router.push(`detailBoard/${result.data.createBoard._id}`);
        alert("글이 작성되었습니다");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };
  // 보드 수정 함수
  const boardEdit = async () => {
    try {
      const variables: IBoardEditVariables = {
        password,
        boardId: router.query.boardId,
      };
      if (title) variables.title = title;
      if (content) variables.contents = content;

      // router.push(`/boards/detailBoard/${result.data.updateBoard._id}`);
      router.push(`/boards/detailBoard/${router.query.boardId}`);
      alert("글이 수정되었습니다");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUi
      onChangeName={onChangeName}
      onChangePass={onChangePass}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeZipCode={onChangeZipCode}
      onChangeAddr={onChangeAddr}
      onChangeAddrDetail={onChangeAddrDetail}
      onChageYoutue={onChageYoutue}
      signCheck={signCheck}
      boardEdit={boardEdit}
      isActive={isActive}
      nameError={nameError}
      passWordError={passWordError}
      titleError={titleError}
      contentError={contentError}
      addrError={addrError}
      addrDetailError={addrDetailError}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
