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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY29udGFjdHMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgQ29udGFjdCB7XG4gICAgaWQ6IEludCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgY29tcGFueTogU3RyaW5nIVxuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgcGhvbmU6IFN0cmluZyFcbiAgICBwcm9kdWN0OiBTdHJpbmchXG4gICAgbWVzc2FnZTogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBjb250YWN0czogW0NvbnRhY3QhXSEgQHNraXBBdXRoXG4gICAgY29udGFjdChpZDogSW50ISk6IENvbnRhY3QgQHNraXBBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVDb250YWN0SW5wdXQge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgICBjb21wYW55OiBTdHJpbmchXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBwaG9uZTogU3RyaW5nIVxuICAgIHByb2R1Y3Q6IFN0cmluZyFcbiAgICBtZXNzYWdlOiBTdHJpbmchXG4gIH1cblxuICBpbnB1dCBVcGRhdGVDb250YWN0SW5wdXQge1xuICAgIG5hbWU6IFN0cmluZ1xuICAgIGNvbXBhbnk6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmdcbiAgICBwaG9uZTogU3RyaW5nXG4gICAgcHJvZHVjdDogU3RyaW5nXG4gICAgbWVzc2FnZTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVDb250YWN0KGlucHV0OiBDcmVhdGVDb250YWN0SW5wdXQhKTogQ29udGFjdCEgQHNraXBBdXRoXG4gICAgdXBkYXRlQ29udGFjdChpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZUNvbnRhY3RJbnB1dCEpOiBDb250YWN0ISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVDb250YWN0KGlkOiBJbnQhKTogQ29udGFjdCEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==