import { Space, DatePicker } from "antd"
import styled from "@emotion/styled";
import moment from 'moment';
import { useState } from "react";


const CalendarDiv = styled.div`
width: 300px;
border: 1px solid #f0f0f0;
border-radius: 2px;
` 

export default function CalendaPage () {

  const [date, setDate] = useState()
  function onChange(date, dateString) {
    console.log(date, dateString);
    setDate(date)
    // alert(dateString);
  }


  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
      <div>{date.substring(0, 7)}</div>
    </Space>

  )
}