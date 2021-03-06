import { ChangeEvent, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUi from "./BoardWirte.presenter";
import { IBoardEditVariables, IBoardWriteUiProps } from "./BoardWirte.types";

export default function BoardWritePage(props: IBoardWriteUiProps) {
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: ""
  })

  const [addrInputs, setAddrInputs] = useState({
    zipcode: "",
    address: "",
    addressDetail: ""
  })

  const [nameError, setNameError] = useState("");
  const [passWordError, setPassWordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [addrError, setAddrError] = useState("");
  const [addrDetailError, setAddrDetailError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      writer: event.target.value
    })

    if (event.target.value) {
      setNameError("");
    }
    if (event.target.value && inputs.password && inputs.title && inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangePass(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      password: event.target.value
    })
    if (event.target.value) {
      setPassWordError("");
    }
    if (inputs.writer && event.target.value && inputs.title && inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      title: event.target.value
    })
    
    if (event.target.value) {
      setTitleError("");
    }
    if (inputs.writer && inputs.password && event.target.value && inputs.contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputs({
      ...inputs,
      contents: event.target.value
    })

    if (event.target.value) {
      setContentError("");
    }
    if (inputs.writer && inputs.password && inputs.title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }



  function onChageYoutue(event: ChangeEvent<HTMLInputElement>) {
    setInputs({
      ...inputs,
      youtubeUrl: event.target.value
    })
  }


  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const signCheck = async () => {
    if (!inputs.writer) {setNameError("????????? ??????????????????"); }
    if (!inputs.password) {setPassWordError("??????????????? ??????????????????");    }
    if (!inputs.title) {setTitleError("????????? ??????????????????");}
    if (!inputs.contents) {setContentError("????????? ??????????????????");}
    if (!addrInputs.address) {setAddrError("????????? ??????????????????");}
    if (!addrInputs.addressDetail) {setAddrDetailError("?????? ????????? ???????????????");}


    if (inputs.writer !== "" && inputs.password !== "" && inputs.title !== "" && inputs.contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              boardAddress: addrInputs,
              images: fileUrls
            },
            },
          },
        );

        router.push(`/boards/detailBoard/${result.data.createBoard._id}`);
        alert("?????? ?????????????????????");

      } catch (error: any) {
        alert(error.message);
      }
    }
  };
  // ?????? ?????? ??????
  const boardEdit = async () => {
    const updateBoardInput: IBoardEditVariables = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (inputs.youtubeUrl) updateBoardInput.youtubeUrl = inputs.youtubeUrl;
    if (addrInputs.zipcode || addrInputs.address || addrInputs.addressDetail) {
      updateBoardInput.boardAddress = {};
      if (addrInputs.zipcode) updateBoardInput.boardAddress.zipcode = addrInputs.zipcode;
      if (addrInputs.address) updateBoardInput.boardAddress.address = addrInputs.address;
      if (addrInputs.addressDetail)
        updateBoardInput.boardAddress.addressDetail = addrInputs.addressDetail;
    }

    try {
      await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput: {
            ...updateBoardInput,
            images: fileUrls
          }
          
        },
      });
      alert("????????? ?????????????????????.")
      router.push(`/boards/detailBoard/${router.query.boardId}`);
      
    } catch (error: any) {
      alert(error.message)
    }

  };

  // addr modal
  const [isOpen, setIsOpen] = useState(false);

  const setToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
   
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    
    setAddrInputs({
      ...addrInputs,
      zipcode: data.zonecode,
      address: fullAddress
    })

    setToggle()
  } 
  function onChangeAddrDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddrInputs({
      ...addrInputs,
      addressDetail: event.target.value
    })
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);



  return (
    <BoardWriteUi
      onChangeName={onChangeName}
      onChangePass={onChangePass}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeAddrDetail={onChangeAddrDetail}
      onChageYoutue={onChageYoutue}
      onChangeFileUrls={onChangeFileUrls}
      signCheck={signCheck}
      boardEdit={boardEdit}
      handleComplete={handleComplete}
      isActive={isActive}
      nameError={nameError}
      passWordError={passWordError}
      titleError={titleError}
      contentError={contentError}
      addrError={addrError}
      addrDetailError={addrDetailError}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      setToggle={setToggle}
      onComplete
      zipcode={addrInputs.zipcode}
      addr={addrInputs.address}
      fileUrls={fileUrls}

    />
  );
}
