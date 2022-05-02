import { render, screen } from '@testing-library/react'
import JestUnitTestPage from '../../pages/34-02-jest-unit-test'
import "@testing-library/jest-dom/extend-expect"

it("내가 원하는대로 그려지는지 테스트하기", () => {
  // 렌더를 도와주는 함수
  render(<JestUnitTestPage />)

  const myText1 = screen.getByText("짱구는 5살 입니다.")
  expect(myText1).toBeInTheDocument
  
  const myText2 = screen.getByText("짱구의 취미 입력하기:")
  expect(myText2).toBeInTheDocument

  const myText3 = screen.getByText("짱구와 놀러가기")
  expect(myText3).toBeInTheDocument

})