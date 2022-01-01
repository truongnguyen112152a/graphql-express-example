import express from 'express';
import { ApolloServer } from 'apollo-server-express'

import typeDefs from "./schemas/schema.js"
import resolvers from "./resolver/resolve.js"

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const app = express()
server.applyMiddleware({ app })

app.listen(3000, () => console.log("connect success!!"))