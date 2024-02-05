const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    questionItems: [QuestionItem!]!
    questionItemByID(id: ID!): QuestionItem
  }

  type QuestionItem {
    ID: ID!
    Question: [String!]
  }
`;

module.exports = typeDefs;
