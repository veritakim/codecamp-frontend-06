import { Modal } from "antd";
import { useEffect, useState } from "react"
import DaumPostcode from "react-daum-postcode";
import * as S from './MapStyle'

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage (props) {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("")
  const [addr, setAddr] = useState({
    zipcode: "",
    address: ""
  })

  const setToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleComplete = (data: any) => {
    // console.log(data)
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

    setAddr({
      zipcode: data.zonecode,
      address: fullAddress
    })

    setAddress(`${data.sigungu} ${data.query}`)
    props.setUseditemAddress({
      ...props.useItemAddress,
      zipcode: data.zonecode,
      address: fullAddress,
    })

    setToggle()
  } 



  useEffect(() => {
    const script = document.createElement("script") 
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=efcf168dc6a63b0bd8468072c5ae3c30&libraries=services&autoload=false"

    document.head.appendChild(script) 

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); 
        const options = {
          center: new window.kakao.maps.LatLng(37.2939104, 127.2025664 ), 
          level: 2
        };
    
        const map = new window.kakao.maps.Map(container, options); 

        let marker = new window.kakao.maps.Marker({ 
          position: map.getCenter() 
        }); 
        marker.setMap(map);

        const geocoder = new window.kakao.maps.services.Geocoder();

        const callback = function(result, status) {
            if (status === window.kakao.maps.services.Status.OK) {

                const x = result[0].x
                const y = result[0].y
                console.log("??????????????????",x, y)
                props.setMap({
                  lat: Number(y),
                  lng: Number(x)
                })

                const coords = new window.kakao.maps.LatLng(y, x)

                marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords
                });

                map.setCenter(coords)
            }
        };

        geocoder.addressSearch(address || '????????? ???????????? 300', callback);

      })
      
    }
  }, [address])

  const onChangeDetailAddr = (event) => {

    // props.setUseditemAddress({
      //   ...props.useItemAddress,
      //   zipcode: data.zonecode,
      //   address: fullAddress,
      // })

    props.setUseditemAddress({
      zipcode: addr.zipcode,
        address: addr.address,
      addressDetail: event.target.value
    })

    // console.log(event.target.value)
  }



  return (
    <S.MapArea>
      <div id="map" style={{width:384, height:252}}></div>
      
      <S.MapInputArea>
      <S.BtnArea>
        <S.MyAddrCodeInput>
        {addr.zipcode}  
        </S.MyAddrCodeInput> 

        <S.SearchBtn type="button" onClick={setToggle}>???????????? ??????</S.SearchBtn>
      </S.BtnArea>

        <S.AddressInput>{addr.address}</S.AddressInput>
        <S.DetailAddrInput type="text" placeholder="??????????????? ???????????????" onChange={onChangeDetailAddr}/>
      </S.MapInputArea>
      {isOpen && 
          <Modal
          visible={true}
          onOk={setToggle}
          onCancel={setToggle}>
            <DaumPostcode onComplete={handleComplete}  />
          </Modal>
        }
    </S.MapArea>
  )
}