const data = require('./data.json'); // Assuming your JSON data is an array

const resolvers = {
  Query: {
    questionItems: () => data,
    questionItemByID: (_, { id }) => data.find(item => item.ID === Number(id)),
  },
};
