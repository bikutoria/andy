import { ApolloServer, gql } from 'apollo-server-micro';
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
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.end();
    return false;
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
