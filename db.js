const { Client } = require('pg')

// connection to PostgreSQL Database
const client = new Client({
    user: process.env.DB_USER, // postgres by default
    host: process.env.DB_HOST, // 127.0.0.1
    database: process.env.DB_DATABASE, // Database Name
    password: process.env.DB_PASSWORD,
    port: 5432                  // default port for postgreSQL
})

module.exports = client