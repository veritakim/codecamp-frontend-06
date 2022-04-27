import {v4 as uuid} from 'uuid'
export default function BasketItems (props) {

  return (
    <>
      <div key={uuid()}>
        <input type="checkbox" />
        <div>{props.el.name}</div>
        <div>{props.el.price}</div>
      </div>
    </>
  )
}