import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import LazyLoad from 'react-lazy-load'

const Imgarea = styled.img`
  width: 500px;
  height: 500px;
`

export default function LazyPreLoadImagePage () {
  const imageArr = []
  const divRef = useRef<HTMLDivElement>(null)
  const [imgTag, setImgTag] = useState<HTMLImageElement>()
 
  for (let i = 1 ; i < 11; i++) {
    imageArr.push(`/puppy/puppy${i}.jpeg`)
  }

  useEffect(() => {
    const img = new Image()
    img.src = 'https://petapixel.com/assets/uploads/2014/11/alicjazmyslowska08.jpg'
    img.onload = () => {
      setImgTag(img)
    }
  }, [])

  const onClickPreLoad = () => {
    if (imgTag) {
      divRef.current?.appendChild(imgTag)
    }
  }


  return(
    <div>
    <div className="filler" />
    {imageArr ? 
    imageArr.map ((el) => (
      <div>
        <LazyLoad height={500} offsetVertical={500}>
        <Imgarea src={el} />
        </LazyLoad>
       <div className="filler" />
      </div>
    ))
    : (<div></div>)
    }
    <button onClick={onClickPreLoad}>이미지 보여주기</button>
    <div ref={divRef}></div>
  </div>
  )
}