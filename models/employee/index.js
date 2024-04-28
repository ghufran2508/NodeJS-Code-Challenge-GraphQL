const client = require('./../../db');

// Employee class contains all the function (CRUD)
class Employee {
    // CREATE
    // create new employee in database 
    async createEmployee(name, job, department, salary, hire_date) {
        const query = `                
        INSERT INTO employees (name, job, department, salary, hire_date)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
                  `
        const result = await client.query(
            query, [name, job, department, salary, hire_date]
        )

        return result.rows[0]
    }
    
    // READ
    // get employee by id
    async getEmployeeById(id) {
        const query = `
            Select * from employees 
            where id=$1
        `

        const result = await client.query(query, [id]);

        return result.rows[0];
    }

    // get employee by field name
    // e.g: field='name', value='Muhammad Ghufran Ali'
    async getEmployees(field, value) {
        const query = `
            SELECT * from employees
            where ${field}=$1
        `
        const result = await client.query(query, [value]);
        return result.rows;
    }

    // get all employees list in database
    async getAllEmployees() {
        const query = `
            Select * from employees
        `
        const result = await client.query(query);
        return result.rows;
    }

    // UPDATE
    // update employee by ID
    async updateEmployee(id, name, job, department, salary, hire_date) {
        const query = `
            Update employees
            set name=$2, job=$3, department=$4, salary=$5, hire_date=$6
            where id=$1
            RETURNING*;
        `

        const result = await client.query(query, [id, name, job, department, salary, hire_date]);

        return result.rows[0]
    }

    // DELETE
    // delete employee find by id...
    async deleteEmployee(id) {
        const query = `
            Delete from employees 
            where id=$1
            RETURNING*;
        `
        const result = await client.query(query, [id]);
        return result.rowCount > 0;
    }
}

module.exports = Employee