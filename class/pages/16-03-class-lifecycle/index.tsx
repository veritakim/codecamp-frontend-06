import { Component, createRef } from "react";
import Router from 'next/router'

interface IState {
  count: number;
}

export default class ClassCounter extends Component{
 
  state = {
    count: 0
  } 

  // 렌더되고 나서 한번만 실행된다.
  componentDidMount () {
    // 언제 실행시키지 ? 그려지고 나서 화면에 포커스 깜빡이게 할 때
    console.log("마운트됨")
    this.aaa.current?.focus();
  }

  // 카운트 눌렀을 때마다 수정이 될 때마다 리렌더 된다.
  componentDidUpdate () {
    console.log("수정되고 다시 그려짐!!!")
  }

  
  componentWillUnmount () {
    // 채팅방 나가기
    // 채팅방 나가는 api 요청
    // ex 채팅을 하다가 다른 페이지로 넘어갔을 때 채팅방을 나가라고 알려줘야 한다. 
    console.log("컴포넌트 사라짐")
  }



  onClickCounter = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1
    }))
  }

  onclickMove () {
    Router.push("/")
  }

  aaa = createRef<HTMLInputElement>();

  render(){
    return (
      <div>
        <input type='text' ref={this.aaa}/>
        <div>현재카운트 {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onclickMove}>나가기 </button>
      </div>
    )
  }
}
