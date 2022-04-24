import Head from "next/head"
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage () {

  useEffect(() => {
    const script = document.createElement("script") 
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=efcf168dc6a63b0bd8468072c5ae3c30&autoload=false"

    document.head.appendChild(script) 

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); 
        const options = {
          center: new window.kakao.maps.LatLng(37.2939104, 127.2025664 ), 
          level: 3
        };
    
        const map = new window.kakao.maps.Map(container, options); 

        let marker = new window.kakao.maps.Marker({ 
          // 지도 중심좌표에 마커를 생성합니다 
          position: map.getCenter() 
      }); 
      marker.setMap(map);
      
      window.kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
          
          let latlng = mouseEvent.latLng; 
          
          marker.setPosition(latlng);
      });
      })
    }
  }, [])

  return (
    <div>
      <div id="map" style={{width:600, height:500}}></div>
    </div>
  )
}