import { useState } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function ModalAddrPage () {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleComplete = (data) => {
    console.log(data); 
    setIsOpen(false);
  }



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      
      {/*  모달 숨겼다가 나타나게 하는 방법
      <Modal title="Basic Modal" visible={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcode onComplete={handleComplete} />  
      </Modal> 
      */}

      
      {isOpen && (
      <Modal title="Basic Modal" 
        visible={true} 
        onOk={handleOk} 
        onCancel={handleCancel}>
      <DaumPostcode onComplete={handleComplete} />
      </Modal>
      )}  
    </>
  );
};

