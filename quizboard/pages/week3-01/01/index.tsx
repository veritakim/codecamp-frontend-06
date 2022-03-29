import {ChangeEvent, useState} from 'react';
import {Rate} from 'antd';

export default function StarPage () {

  
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
    alert(value);
  };
  
  

  return (
    <span>
      <Rate onChange={handleChange} value={value}  />
      <div >{value}</div>
    </span>
  );

} 