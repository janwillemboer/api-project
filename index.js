const PORT = process.env.PORT || 3000;

const server = require("fastify")();
const mercurius = require("mercurius");
const fs = require("fs");

// read the graphql schema from file (should also be shared 
// with the client)
const schema = fs.readFileSync("schema.gql").toString();

const resolvers = require("./resolvers.js");
server.register(mercurius, {schema, resolvers, graphiql: true});

server.listen({ port: PORT }, () => console.log(`Listening at http://localhost:${PORT}`));

