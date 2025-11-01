import Navbar from "../components/Navbar";
import Head from "next/head";
import ProductCard from "../components/ProductCard";

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const json = await res.json();
  const products = Array.isArray(json.products) ? json.products : [];

  return {
    props: { products },
  };
}

export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <title>Products — Simple Store | Sagar Jedhe</title>
        <meta
          name="description"
          content="Server-side rendered product listing — responsive cards, SEO-friendly images and structured data."
        />
        <meta name="robots" content="index,follow" />
      </Head>

      <Navbar />   {/* <-- here */}

      <header className="site-header container">
        <h1>Products</h1>
        <p className="tagline">Server-side rendered (SSR) product listing</p>
      </header>

      <main className="container">
        <h2>Featured Items</h2>

        <section className="products-grid" aria-label="Products">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>

      <footer className="site-footer container">
        <small>© {new Date().getFullYear()} Sagar Jedhe</small>
      </footer>
    </>
  );
}
