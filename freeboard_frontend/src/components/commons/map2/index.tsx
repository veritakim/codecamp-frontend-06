import { useEffect, useState } from "react"
import * as S from './MapStyle'

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage2 (props) {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if(!load) return

    const script = document.createElement("script") 
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=efcf168dc6a63b0bd8468072c5ae3c30&libraries=services&autoload=false"

    document.head.appendChild(script) 

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); 
        const options = {
          center: new window.kakao.maps.LatLng(props.lat, props.lng ), 
          level: 3
        };
    
        const map = new window.kakao.maps.Map(container, options); 

        const marker = new window.kakao.maps.Marker({ 
          position: map.getCenter() 
        }); 
        
        marker.setMap(map);
      })
      
    }
  }, [load])

  useEffect(() => {
    if (props.lat !== undefined && props.lng !== undefined) {
      setLoad(true);
    }
  }, [props.lat, props.lng]);



  return (
    <S.MapArea>
      <div id="map" style={{width:560, height:340}}></div>
    </S.MapArea>
  )
}