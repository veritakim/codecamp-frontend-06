import Presenter from "./component.presenter";

export default function Container() {
  return (
    <>
      {Presenter ({child:"철수", age: 13})}
    </>
  );
}