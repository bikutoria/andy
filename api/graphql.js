//import { ApolloServer, gql } from 'apollo-server-micro';
const { ApolloServer } = require('apollo-server-micro');
// Import your schema and resolvers as before
const typeDefs = require('../schema.js');
const resolvers = require('../resolvers.js'); 

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // other options
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    // Respond to OPTIONS request for preflight with status 200
    res.status(200).end();
    return;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
  

// This disables the default body parser to improve performance
export const config = {
  api: {
    bodyParser: false,
  },
};
