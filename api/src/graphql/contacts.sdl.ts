export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    company: String!
    email: String!
    phone: String!
    product: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @skipAuth
    contact(id: Int!): Contact @skipAuth
  }

  input CreateContactInput {
    name: String!
    company: String!
    email: String!
    phone: String!
    product: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    company: String
    email: String
    phone: String
    product: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
