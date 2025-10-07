import pool from '../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT id, page_title FROM pages LIMIT 10');
    return NextResponse.json({ success: true, data: rows });
  } catch (error) {
    console.error('Database query error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}