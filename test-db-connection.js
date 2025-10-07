// test-db-connection.js
import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log('✅ Connected successfully! Current time:', rows[0].now);
    process.exit(0); // exit after success
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
    process.exit(1); // exit with error
  }
}

testConnection();