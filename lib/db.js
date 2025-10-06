import mysql from "mysql2/promise";

// Create a connection pool for MySQL
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,       // MySQL host
  user: process.env.MYSQL_USER,       // MySQL username
  password: process.env.MYSQL_PASSWORD, // MySQL password
  database: process.env.MYSQL_DATABASE, // MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;