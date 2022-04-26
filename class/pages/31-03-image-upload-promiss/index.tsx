export default function PromiseAllPracticePage() {
  const onClickPromise = async () => {
    console.time("start")

    // promise는 시간이 걸리는 작업. 큐로 빠진다.
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve가 실행되면 끝 , reject는 에러
        resolve("짱구1")
      }, 3000)
    })
    console.log(result)

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("짱구2")
      }, 1000)
    })
    console.log(result2)

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("짱구3")
      }, 2000)
    })
    console.log(result3)

    console.timeEnd("start")

  }

  const onClickPromiseAll = async () => {
    /*
    하나 하나 씩 확인하는 방법
    console.time("PromiseAll시작")
    const result = await Promise.all([
      new Promise((resolve, reject) => {
        setTimeout(() => {
          // resolve가 실행되면 끝 , reject는 에러
          resolve("짱구1")
        }, 3000)
      }),

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("짱구2")
        }, 1000)
      }), 

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("짱구3")
        }, 2000)
      })
    ])

    console.log(result)
    console.timeEnd("PromiseAll시작")
    */


    // 한번에 확인하는 방법
    console.time("PromiseAll시작")

    const result = await Promise.all([
      ["https://짱구1", "https://짱구2", "https://짱구3"].map((el) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(el)
          }, 3000)
        })
      })
    ])

    console.log(result)
    console.timeEnd("PromiseAll시작")
  }

  return (
    <div>
      <button onClick={onClickPromise}>Promise Practice</button>
      <button onClick={onClickPromiseAll}>Promise.all.練習</button>
    </div>
  )
}