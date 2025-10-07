import pool from '../../lib/db.js';

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM pages'); // replace with your table
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database query failed' });
  }
}