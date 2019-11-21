const { GraphQLServer } = require("graphql-yoga");
const casual = require("casual");
const { typeDefs } = require("./schema");
const demoData = require("./meetups");

// Mock Data

// const mocks = {
//   Visitor: () => ({
//     name: casual.name
//   })
// };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const resolvers = {
  Query: {
    allMeetups: () => demoData.meetups
  }
};

const options = {
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

const server = new GraphQLServer({ typeDefs, resolvers });
// const server = new GraphQLServer({ typeDefs, resolvers, mocks });

server.start(options, () =>
  console.log("Server is running on http://localhost:4000/playground")
);
