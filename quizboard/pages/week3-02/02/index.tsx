import { Modal, Button } from 'antd';
import { useState } from 'react';

export default function ModalQuizPage () {
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('게시글이 등록되었습니다.');
  const [isOpen, setIsOpen] = useState(false)

  const toggleFunction = () => {
    setIsOpen(prev => !prev)
  }


  const handleCancel = () => {
    // console.log('Clicked cancel button');
    toggleFunction();
  };

  return (
    <>
      <button onClick={toggleFunction}>모달열기</button>
      {isOpen && 
        <Modal
          title="게시글 등록"
          visible={true}
          onOk={toggleFunction}
          onCancel={toggleFunction}
        >
          <p>{modalText}</p>
        </Modal>
      }
    </>
  );
};