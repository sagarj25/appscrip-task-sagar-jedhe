import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Store — Products Demo | Sagar Jedhe</title>
        <meta
          name="description"
          content="Simple Store demo — server-side rendered responsive product listing. Built by Sagar Jedhe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Simple Store — Products Demo",
              url: "https://your-deploy-url.example",
              description:
                "Server-side rendered responsive product listing demo built by Sagar Jedhe.",
            }),
          }}
        />
      </Head>

      <Navbar />

      <header className="site-header container">
        <h1>Simple Store — Products Demo</h1>
        <p className="tagline">Server-Side Rendered • Responsive • SEO-friendly</p>
      </header>

      <main className="container">
        <h2>Explore Products</h2>
        <p>
          Discover amazing products and enjoy a clean browsing experience.
          Visit the full listing here: <a href="/products">View Products</a>.
        </p>
      </main>

      <section className="container about-section">
        <h2>Why this demo?</h2>
        <p>
          This store showcases modern web techniques like fast rendering,
          responsive UI and clean SEO structure. Browse products and experience
          smooth page navigation across devices.
        </p>
      </section>

      <footer className="site-footer container">
        <small>© {new Date().getFullYear()} Sagar Jedhe</small>
      </footer>
    </>
  );
}
