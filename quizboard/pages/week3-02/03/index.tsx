import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';
import { useState } from 'react';

export default function AddrModalPage () {
  
  const [isOpen, setIsOpen] = useState(false);

  const setToggle = () => {
    setIsOpen(prev => !prev)
  }

  const [addr, setAddr] = useState("")

  // 주소창
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

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddr(fullAddress)
    setToggle()
  } 
 

  return (
    <div>
      <button onClick={setToggle}>주소검색</button>
      {isOpen && (
       <Modal
        visible={true}
        onOk={setToggle}
        onCancel={setToggle}
      >
        <DaumPostcode onComplete={handleComplete}  />
      </Modal>
      )}
      <div>{addr}</div>
    </div>

  );

}