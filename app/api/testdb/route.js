import pool from '../../../lib/db.js';

export async function GET(request) {
  try {
    const [rows] = await pool.query('SELECT * FROM pages'); // your table
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}