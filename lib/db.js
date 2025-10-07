import mysql from 'mysql2/promise';

let pool;

// Reuse pool if already created (important for serverless)
if (!global.mysqlPool) {
  pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  global.mysqlPool = pool;
} else {
  pool = global.mysqlPool;
}

export default pool;