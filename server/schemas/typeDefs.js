const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    name: String
    lastName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Product {
   pId: String
    description: String
    name: String!
    imageURL: String
    unitInStock: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: User
    product (pId: String, description: String, 
    name: String!, imageURL: String, 
    unitInStock: String): Product
  }

  type Mutation {
    addUser(username: String, email: String, password: String): Auth
    login(email: String!, password: String!): Auth
    
    addProduct(pId: String, description: String, name: String!, imageURL: String, unitInStock: String): User
  }
`;

module.exports = typeDefs;
