import pool from "../../lib/db";

// Define your product type
type Product = {
  id: number;
  page_title: string;
};

async function getProducts(): Promise<Product[]> {
  // Use RowDataPacket[] and cast the result
  const [rows] = await pool.query("SELECT id, page_title FROM pages") as unknown as Product[];
  return rows;
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