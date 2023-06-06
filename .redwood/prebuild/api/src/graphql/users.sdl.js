import gql from "graphql-tag";
export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    completed: String
    notes: String
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    completed: String
    notes: String
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    completed: String
    notes: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlcnMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgVXNlciB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgIGhhc2hlZFBhc3N3b3JkOiBTdHJpbmchXG4gICAgc2FsdDogU3RyaW5nIVxuICAgIHJlc2V0VG9rZW46IFN0cmluZ1xuICAgIHJlc2V0VG9rZW5FeHBpcmVzQXQ6IERhdGVUaW1lXG4gICAgY29tcGxldGVkOiBTdHJpbmdcbiAgICBub3RlczogU3RyaW5nXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICB1c2VyczogW1VzZXIhXSEgQHJlcXVpcmVBdXRoXG4gICAgdXNlcihpZDogSW50ISk6IFVzZXIgQHJlcXVpcmVBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVVc2VySW5wdXQge1xuICAgIG5hbWU6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgaGFzaGVkUGFzc3dvcmQ6IFN0cmluZyFcbiAgICBzYWx0OiBTdHJpbmchXG4gICAgcmVzZXRUb2tlbjogU3RyaW5nXG4gICAgcmVzZXRUb2tlbkV4cGlyZXNBdDogRGF0ZVRpbWVcbiAgICBjb21wbGV0ZWQ6IFN0cmluZ1xuICAgIG5vdGVzOiBTdHJpbmdcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZVVzZXJJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW1haWw6IFN0cmluZ1xuICAgIGhhc2hlZFBhc3N3b3JkOiBTdHJpbmdcbiAgICBzYWx0OiBTdHJpbmdcbiAgICByZXNldFRva2VuOiBTdHJpbmdcbiAgICByZXNldFRva2VuRXhwaXJlc0F0OiBEYXRlVGltZVxuICAgIGNvbXBsZXRlZDogU3RyaW5nXG4gICAgbm90ZXM6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlVXNlcihpbnB1dDogQ3JlYXRlVXNlcklucHV0ISk6IFVzZXIhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZVVzZXIoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVVc2VySW5wdXQhKTogVXNlciEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlVXNlcihpZDogSW50ISk6IFVzZXIhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyJ9