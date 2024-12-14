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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvdXNlcnMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgdHlwZSBVc2VyIHtcclxuICAgIGlkOiBJbnQhXHJcbiAgICBuYW1lOiBTdHJpbmdcclxuICAgIGVtYWlsOiBTdHJpbmchXHJcbiAgICBoYXNoZWRQYXNzd29yZDogU3RyaW5nIVxyXG4gICAgc2FsdDogU3RyaW5nIVxyXG4gICAgcmVzZXRUb2tlbjogU3RyaW5nXHJcbiAgICByZXNldFRva2VuRXhwaXJlc0F0OiBEYXRlVGltZVxyXG4gICAgY29tcGxldGVkOiBTdHJpbmdcclxuICAgIG5vdGVzOiBTdHJpbmdcclxuICB9XHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgdXNlcnM6IFtVc2VyIV0hIEByZXF1aXJlQXV0aFxyXG4gICAgdXNlcihpZDogSW50ISk6IFVzZXIgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5cclxuICBpbnB1dCBDcmVhdGVVc2VySW5wdXQge1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBlbWFpbDogU3RyaW5nIVxyXG4gICAgaGFzaGVkUGFzc3dvcmQ6IFN0cmluZyFcclxuICAgIHNhbHQ6IFN0cmluZyFcclxuICAgIHJlc2V0VG9rZW46IFN0cmluZ1xyXG4gICAgcmVzZXRUb2tlbkV4cGlyZXNBdDogRGF0ZVRpbWVcclxuICAgIGNvbXBsZXRlZDogU3RyaW5nXHJcbiAgICBub3RlczogU3RyaW5nXHJcbiAgfVxyXG5cclxuICBpbnB1dCBVcGRhdGVVc2VySW5wdXQge1xyXG4gICAgbmFtZTogU3RyaW5nXHJcbiAgICBlbWFpbDogU3RyaW5nXHJcbiAgICBoYXNoZWRQYXNzd29yZDogU3RyaW5nXHJcbiAgICBzYWx0OiBTdHJpbmdcclxuICAgIHJlc2V0VG9rZW46IFN0cmluZ1xyXG4gICAgcmVzZXRUb2tlbkV4cGlyZXNBdDogRGF0ZVRpbWVcclxuICAgIGNvbXBsZXRlZDogU3RyaW5nXHJcbiAgICBub3RlczogU3RyaW5nXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIGNyZWF0ZVVzZXIoaW5wdXQ6IENyZWF0ZVVzZXJJbnB1dCEpOiBVc2VyISBAcmVxdWlyZUF1dGhcclxuICAgIHVwZGF0ZVVzZXIoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVVc2VySW5wdXQhKTogVXNlciEgQHJlcXVpcmVBdXRoXHJcbiAgICBkZWxldGVVc2VyKGlkOiBJbnQhKTogVXNlciEgQHJlcXVpcmVBdXRoXHJcbiAgfVxyXG5gXHJcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=