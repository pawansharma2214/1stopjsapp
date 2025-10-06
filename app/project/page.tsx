import pool from "../../lib/db";
type Product = {
  id: number;
  page_title: string;
  // add other fields if needed
};
async function getProducts(): Promise<Product[]> {
  const [rows] = await pool.query<Product[]>("SELECT id, page_title FROM pages");
  return rows;
}
export default async function ProductPage() {
  const products = await getProducts();
  return (
    <main>
      <h1>Our Pages</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.page_title}</li>
        ))} 
      </ul>
    </main>
  );
}