export const schema = gql`
  type Data {
    id: Int!
    data: String!
  }

  type Query {
    datas: [Data!]! @requireAuth
    data(id: Int!): Data @requireAuth
  }

  input CreateDataInput {
    data: String!
  }

  input UpdateDataInput {
    data: String
  }

  type Mutation {
    createData(input: CreateDataInput!): Data! @requireAuth
    updateData(id: Int!, input: UpdateDataInput!): Data! @requireAuth
    deleteData(id: Int!): Data! @requireAuth
  }
`
