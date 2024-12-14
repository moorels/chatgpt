import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY29udGFjdHMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXHJcbiAgdHlwZSBDb250YWN0IHtcclxuICAgIGlkOiBJbnQhXHJcbiAgICBuYW1lOiBTdHJpbmchXHJcbiAgICBjb21wYW55OiBTdHJpbmchXHJcbiAgICBlbWFpbDogU3RyaW5nIVxyXG4gICAgcGhvbmU6IFN0cmluZyFcclxuICAgIHByb2R1Y3Q6IFN0cmluZyFcclxuICAgIG1lc3NhZ2U6IFN0cmluZyFcclxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXHJcbiAgfVxyXG5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGNvbnRhY3RzOiBbQ29udGFjdCFdISBAc2tpcEF1dGhcclxuICAgIGNvbnRhY3QoaWQ6IEludCEpOiBDb250YWN0IEBza2lwQXV0aFxyXG4gIH1cclxuXHJcbiAgaW5wdXQgQ3JlYXRlQ29udGFjdElucHV0IHtcclxuICAgIG5hbWU6IFN0cmluZyFcclxuICAgIGNvbXBhbnk6IFN0cmluZyFcclxuICAgIGVtYWlsOiBTdHJpbmchXHJcbiAgICBwaG9uZTogU3RyaW5nIVxyXG4gICAgcHJvZHVjdDogU3RyaW5nIVxyXG4gICAgbWVzc2FnZTogU3RyaW5nIVxyXG4gIH1cclxuXHJcbiAgaW5wdXQgVXBkYXRlQ29udGFjdElucHV0IHtcclxuICAgIG5hbWU6IFN0cmluZ1xyXG4gICAgY29tcGFueTogU3RyaW5nXHJcbiAgICBlbWFpbDogU3RyaW5nXHJcbiAgICBwaG9uZTogU3RyaW5nXHJcbiAgICBwcm9kdWN0OiBTdHJpbmdcclxuICAgIG1lc3NhZ2U6IFN0cmluZ1xyXG4gIH1cclxuXHJcbiAgdHlwZSBNdXRhdGlvbiB7XHJcbiAgICBjcmVhdGVDb250YWN0KGlucHV0OiBDcmVhdGVDb250YWN0SW5wdXQhKTogQ29udGFjdCEgQHNraXBBdXRoXHJcbiAgICB1cGRhdGVDb250YWN0KGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlQ29udGFjdElucHV0ISk6IENvbnRhY3QhIEByZXF1aXJlQXV0aFxyXG4gICAgZGVsZXRlQ29udGFjdChpZDogSW50ISk6IENvbnRhY3QhIEByZXF1aXJlQXV0aFxyXG4gIH1cclxuYFxyXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=