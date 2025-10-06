import pool from "../../lib/db";

async function getProducts() {
  const [rows] = await pool.query("SELECT * FROM pages");
  return rows;
}

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <main>
      <h1>Our Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </main>
  );
}