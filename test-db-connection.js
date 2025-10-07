import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const test = async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() as now');
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
};

test();
