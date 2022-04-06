console.log("타입스크립트를 실행했어요")

import {DataSource} from 'typeorm'
import { Board } from './Board.postgres'
import {ApolloServer, gql} from 'apollo-server'

// type
const typeDefs = gql`
  type Board {
    number: Int,
    writer: String,
    title: String,
    contents: String
  }

  input CreateBoardInput {
    writer: String,
    title: String,
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String - 연습용 
    createBoard(createBoardInput: CreateBoardInput!): String # 실제 사용
  }

`;

// api
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기
      const result = await Board.find()
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      //데이터베이스에 접속해서 게시물 등록하기

      // 등록이 될 때 까지 기다려야 한다.
      await Board.insert({
        ...args.createBoardInput
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents
      })
      
      return '게시물을 등록했습니다'
    }
  }
};

// cors를 풀어주는 곳
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true
});


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
  // 백엔드 API를 오픈(listen. 24시간동안 접속 가능하게끔 대기 상태로 만들어 주기)
  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}).catch(() => {
  // 연결에 실패하면
  console.log("연결실패")
})

