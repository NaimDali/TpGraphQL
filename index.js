import { GraphQLServer } from "graphql-yoga";
import { Query } from "../resolvers/Query.js";
import { Student } from "./resolvers/Student";
import { User } from "./resolvers/User";
import { Todo } from "./resolvers/Todo";
import { db } from "./data/db.js";
import { Subscription } from "./resolvers/Subscription";
import { Mutation } from "./resolvers/Mutation";

// ... or using "require()"
// const { GraphQLServer } = require('graphql-yoga')
const typeDefs = "schema/schema.graphql";
const resolvers = {
  Query,
  Student,
  User,
  Todo,
  Mutation,
  Subscription,
};

const pubsub = new PubSub();
const context = {
  db,
  pubsub,
};

const server = new GraphQLServer({ typeDefs, context, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
