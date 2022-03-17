import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage () {

  const [data, setData] = useState("")
  const [searchIdData, setIdData] = useState("  ")

  let searchId = "";
  let result = "";

  const callRestApi = async () => {
    result = await axios.get('https://koreanjson.com/users')
    console.log(result);

    // length 나온는 걸 확인해봄
    // console.log(result.data.length);

    let dataContent = "";
    

    // 태그를 같이 추가해서 div return 안에 부분에 사용하고 싶어서 한 노력.. 
    // const rendering = () => {
    //   const result2 = [];
    //   for (let i = 0 ; i < result.data.length; i++) {
    //     result2.push(<div key={i}>{result.data[i].name}</div>);
    //   }
    //   return result2;
    // }

    // for (let i = 0; i < result.data.length; i++) {
    //   dataContent += result.data[i].name + '<br />'
    // }
        
    for (let i = 0 ; i < result.data.length; i++) {
      dataContent += result.data[i].name + "@"
    }

    setData(dataContent)

  }


  const onChangeId = (event) => {
    searchId = event.target.value;
  }

  const onClickId = () => {
    const men = data.filter((person) => {
      person.id === searchId
    })
    console.log(men);
  }

  return (
    <div>
      {
          data.split('@').map( line => {
            return (<span>{line}<br/></span>)
          })
        }
      <button onClick={callRestApi}>REST-API 요청하기</button> 

      <div>
        <div>아이디로 회원 검색하기</div>
        <input type="text" onChange={onChangeId}></input>
        <button onClick={onClickId}>조회하기</button>
        <div>검색한 회원 정보</div>
        <div>{searchIdData}</div>
      </div>
    </div>
  )

}

// export default RestGetPage;




