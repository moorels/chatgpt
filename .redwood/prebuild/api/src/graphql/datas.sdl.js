import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvZGF0YXMuc2RsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHR5cGUgRGF0YSB7XG4gICAgaWQ6IEludCFcbiAgICBkYXRhOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBkYXRhczogW0RhdGEhXSEgQHJlcXVpcmVBdXRoXG4gICAgZGF0YShpZDogSW50ISk6IERhdGEgQHJlcXVpcmVBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVEYXRhSW5wdXQge1xuICAgIGRhdGE6IFN0cmluZyFcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZURhdGFJbnB1dCB7XG4gICAgZGF0YTogU3RyaW5nXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVEYXRhKGlucHV0OiBDcmVhdGVEYXRhSW5wdXQhKTogRGF0YSEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlRGF0YShpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZURhdGFJbnB1dCEpOiBEYXRhISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVEYXRhKGlkOiBJbnQhKTogRGF0YSEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdLCJtYXBwaW5ncyI6Ik9BQXNCQSxHQUFHO0FBQXpCLE9BQU8sTUFBTUMsTUFBTSxHQUFHRCxHQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=