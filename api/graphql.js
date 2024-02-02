const { ApolloServer } = require('apollo-server-micro');
const typeDefs = require('.schema.js'); // Adjust path as needed
const resolvers = require('.resolvers.js'); 

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  export default apolloServer.createHandler({ path: "/api/graphql" });