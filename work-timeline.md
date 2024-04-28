## Required Task

Get started:
1. Create Node JS project
2. Add GraphQL server in project.
3. Create a table "Employee"
* Employee
id
name
job
department
salary
hire_date
4. Create set of Queries and Mutations that will handle the CRUD of employee
- Create
- update
- Read
- Delete
5. You can use any DB but PostgresQL will be preferred.

### Breakdown
Since both (GraphQL and PostgreSQL) were new to me, I started my task by making a simple GraphQL server using apollo-server-express packages. 

Graphql requires a schema setup to work on API. Schema contain typeDef and a resolver. TypeDefs contains the type of data, query and mutation. It acts as a url endpoint. For each TypeDef endpoint, there should be a resolver of same name. Resolver are the actual functions we run.

I create a simple employee class with multiple functions and include them all in typeDefs and resolvers.

After successfull implementation of server, i move towards postgresql. 
I setup(download and install) PostgreSQL on my machine and setup user for my database.
Then i move towards writing queries for Employee table. I use pg(npm-package) to connect and execute database queries.