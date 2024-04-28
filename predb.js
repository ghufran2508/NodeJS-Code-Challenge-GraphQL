const client = require('./db');

// function to check if tables already exist.
const createTables = async () => {
  try {
    // Check if the employees table exists
    const checkEmployeesTableQuery = `
        SELECT EXISTS (
          SELECT 1
          FROM   information_schema.tables
          WHERE  table_name = 'employees'
        );
      `;
    const { rows } = await client.query(checkEmployeesTableQuery);
    const employeesTableExists = rows[0].exists;

    // If the employees table doesn't exist, create it
    if (!employeesTableExists) {
      const createEmployeesTableQuery = `
          CREATE TABLE employees (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            job VARCHAR(255) NOT NULL,
            department VARCHAR(255) NOT NULL,
            salary VARCHAR(255) NOT NULL,
            hire_date DATE NOT NULL
          );
        `;
      await client.query(createEmployeesTableQuery);
      console.log('Employees table created');
    } else {
      console.log('Employees table already exists');
    }

    // add more tables here....
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

module.exports = createTables
