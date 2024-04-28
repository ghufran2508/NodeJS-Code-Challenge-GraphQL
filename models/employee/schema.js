const { gql } = require("apollo-server-express");
const Employee = require('./index')

const typeDefs = gql`
type Employee {
    id: Int!
    name: String
    job: String
    department: String
    salary: String
    hire_date: String
}

type Query {
    hello: String
    getEmployeeById(id: Int!): Employee
    getEmployees(field: String, value: String!): [Employee]!
    getAllEmployees: [Employee!]!
}

type Mutation {
    createEmployee(name: String, job: String, department: String, salary: String, hire_date: String): Employee!
    updateEmployee(id: Int!, name: String, job: String, department: String, salary: String, hire_date: String): Employee
    deleteEmployee(id: Int!): Boolean!
}
`

const resolvers = {
    Query: {
        hello: () => 'hello world!',
        getEmployeeById: async (_, { id }) => {
            try {
                const e = new Employee()
                const result = await e.getEmployeeById(id);
                return result;
            }
            catch (err) {
                console.log(err)
            }
        },
        getEmployees: async (_, { field, value }) => {
            try {
                const e = new Employee()
                const result = await e.getEmployees(field, value);
                return result
            }
            catch (err) {
                console.log(err)
            }
        },
        getAllEmployees: async (_, { }) => {
            try {
                const e = new Employee();
                const result = e.getAllEmployees();
                return result
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    Mutation: {
        createEmployee: async (_, { name, job, department, salary, hire_date }) => {
            try {
                const e = new Employee();
                const result = await e.createEmployee(name, job, department, salary, hire_date);
                return result;
            }
            catch (err) {
                console.log(err);
            }
        },
        updateEmployee: async (_, { id, name, job, department, salary, hire_date }) => {
            try {
                const e = new Employee();
                const result = await e.updateEmployee(id, name, job, department, salary, hire_date);
                return result;
            }
            catch (err) {
                console.log(err);
            }
        },
        deleteEmployee: async (_, { id }) => {
            try {
                const e = new Employee();
                const result = await e.deleteEmployee(id);
                return result;
            }
            catch (err) {
                console.log(err);
            }
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}