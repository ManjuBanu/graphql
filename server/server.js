import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
 


const typeDefs = `#graphql
type Query {
    greetings: String
    greet: String
}
`;


const resolvers ={
    Query: {
        greetings: () => 'Hello World!',
        greet: () => "manju",
    },
}


// new constructor, it will take type and resolver  & typeDefs:typeDefs 
const server = new ApolloServer({typeDefs, resolvers});
// const serverInfo = await startStandaloneServer(server, {listen: { port: 9000 } });
// serverInfo.url => {url}
const { url } = await startStandaloneServer(server, {listen: { port: 9000 } });


console.log(`server listening at ${url}`);