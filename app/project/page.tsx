import pool from "../../lib/db";
import { RowDataPacket } from "mysql2";

type Product = {
  id: number;
  page_title: string;
};

async function getProducts(): Promise<Product[]> {
  // Tell TypeScript that 'rows' is an array of Product
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT id, page_title FROM pages"
  );

  return rows as Product[];
}

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Our Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.page_title}</li>
        ))}
      </ul>
    </main>
  );
}