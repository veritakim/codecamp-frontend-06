import { render } from "@testing-library/react"
import JestUnitSnapShotTestPage from "../../pages/34-03-jest-unit-snapshot"

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보기 - 스냅샷 테스트", () => {
  const result = render(<JestUnitSnapShotTestPage />)
  expect(result.container).toMatchSnapshot()
})