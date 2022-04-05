// backend로 연결해보기
// typescript 설치하기 
// yarn add typescript --dev   
// yarn add typeorm 
console.log("타입스크립트를 실행했어요")

// 접속을 해보자 

// typeorm 입폴트 하기
import {DataSource} from 'typeorm'
import { Board } from './Board.postgres'

const AppDataSource = new DataSource({
  type: "postgres",
    host: "34.64.124.189",
    port: 5010,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [Board],
    synchronize: true,
    logging: true,
})

AppDataSource.initialize().then(() => {
  console.log("연결성공")
}).catch(() => {
  // 연결에 실패하면
  console.log("연결실패")
})