var express = require("express")
require('dotenv').config();

const client = require('./db')
const {ApolloServer} = require('apollo-server-express')
const {typeDefs, resolvers} = require('./models/employee/schema');
const createTables = require("./predb");

// start by creating Apollo server
const server = new ApolloServer({typeDefs, resolvers});
const app = express()

server.start().then(() => {
    server.applyMiddleware({app});

    client.connect().then(value => {
        console.log("Connection to Database complete...");
        // after making a successfull connection to database,
        // check if all required tables exists.
        // if already exist, use them
        // else create them.
        createTables()
    })
    .catch(err => {
        throw new Error(err)
    })
    
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
    })

    // check UI for graphql at `http://localhost:4000/graphql`
})
.catch((error) => {
    console.log(error)
})























// var { createHandler } = require("graphql-http/lib/use/express")
// var { buildSchema } = require("graphql")
// var { ruruHTML } = require("ruru/server")
// Construct a schema, using GraphQL schema language
// var schema = buildSchema(/* GraphQL */`
//   type Employee {
//     id: Int!
//     name: String
//     job: String
//     department: String
//     salary: String
//     hire_date: String
//   }
 
//   type Query {
//     getEmployee(id: Int!, name: String, job: String, department: String, salary: String, hire_date: String): Employee
//   }
// `)

// // The root provides the top-level API endpoints
// var root = {
//     getEmployee({ id, name, job, department, salary, hire_date }) {
//         return new Employee(id, name, job, department, salary, hire_date)
//     }
// }


// // Create and use the GraphQL handler.
// app.all(
//     "/graphql",
//     createHandler({
//         schema: schema,
//         rootValue: root,
//     })
// )

// // Serve the GraphiQL IDE.
// app.get("/", (_req, res) => {
//     res.type("html")
//     res.end(ruruHTML({ endpoint: "/graphql" }))
// })

// // Start the server at port
// app.listen(4000)
// console.log("Running a GraphQL API server at http://localhost:4000/graphql")