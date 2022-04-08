import { DataSource } from "typeorm";
import { Products } from "./Board.postgres";
import {ApolloServer, gql} from 'apollo-server'

// type
const typeDefs = gql`
  type Products {
    _id: String,
    number: Int,
    seller: String,
    name: String,
    detail: String,
    price: Int
  }

  type ProductReturn {
    _id: ID,
    seller: String,
    name: String,
    detail: String,
    price: Int
  }

  input CreateProductInput {
    name: String,
    detail: String,
    price: Int
  }

  input UpdateProductInput {
    name: String,
    detail: String,
    price: Int
  }

  type Return {
    _id: String,
    number: Int,
    message: String
  }

  type Query {
    fetchProducts(page: Int): [ProductReturn]
    fetchProduct(productId: ID): [ProductReturn]
  }

  type Mutation {
    createProduct(seller: String!, createProductInput: CreateProductInput!): Return
    updateProduct(productId: ID updateProductInput: UpdateProductInput!): Return
  }


`;

// api
const resolvers = {
  Query: {
    fetchProducts: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기
      const result = await Products.find()
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result2 = await Products.find({ where : {_id : args.productId}})
      return result2;
    }
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
//   //     //데이터베이스에 접속해서 게시물 등록하기

//   //     // 등록이 될 때 까지 기다려야 한다.
      await Products.insert(
       {seller: args.seller,
        ...args.createProductInput })
      
      return '게시물을 등록했습니다'
    },
  updateProduct: async (_: any, args: any) => {

    await Products.update(
        {_id: args.productId},
        {...args.updateProductInput}
      )
      return '게시물이 수정되었습니다'
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
  entities: [Products],
  synchronize: true,
  logging: true,
})

AppDataSource.initialize().then(() => {
  console.log("연결성공")
  server.listen(4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}).catch((error) => {
  // 연결에 실패하면
  console.log(error.message)
})