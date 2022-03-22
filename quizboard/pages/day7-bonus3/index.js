import styled from '@emotion/styled'
import {useState} from 'react'

const Th = styled.th`
background-color: #e6e6e6;
`

const Table = styled.table`
border-style: none;
`


export default function BonusPage4 () {
  const dataList = [
    { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
    { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
    { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
    { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
    { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
    { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
  ];


  const [isChecked, setIsChecked] = useState(false)

  const onClickCheckAll = (event) => {
  
    if(!event.target.checked) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  }



  return (
    <div>
      <Table>
        <tr key="all">
          <Th><input type="checkbox" onClick={onClickCheckAll} isChecked={isChecked}/></Th>
          <Th>번호</Th>
          <Th>제목</Th>
          <Th>작성일</Th>
        </tr>
        {dataList?.map((el) => (
            <tr key={el.id}>
              <td><input type="checkbox" isChecked={isChecked}/></td>
              <td>{el.id}</td>
              <td>{el.data}</td>
              <td>{el.date}</td>
            </tr>
        ))}
        
      </Table>
    </div>
  )
}