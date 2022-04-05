import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

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