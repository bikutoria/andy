const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    questionItems: [QuestionItem!]!
    questionItemByID(id: ID!): QuestionItem
  }

  type QuestionItem {
    ID: ID!
    Question: String!
    Type1: String!
    Type2: String!
  }
`;

module.exports = typeDefs;
