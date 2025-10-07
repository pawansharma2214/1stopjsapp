import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT NOW() as now');
    return Response.json({ success: true, time: rows[0].now });
  } catch (error) {
    console.error('Database connection error:', error);
    return Response.json({ success: false, error: error.message });
  }
}