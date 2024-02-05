const data = require('./data.json'); // Assuming your JSON data is an array

const resolvers = {
  Query: {
    questionItems: () => data,
    //v1
    //questionItemByID: (_, { id }) => data.find(item => item.ID === Number(id)),
    //v2
    questionItemByID: (_, { id }) => {
      console.log("Requested ID:", id); // Log the requested ID
      console.log("Available data:", data); // Log the data to inspect its structure
      const item = data.find(item => item.ID === parseInt(id, 10));
      console.log("Found item:", item); // Log the found item, if any
      return item;
    }
  },
};
