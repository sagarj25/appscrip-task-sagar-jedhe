export default function ProductCard({ product }) {
  // Keep DOM minimal and semantic
  const priceInINR = Math.round((product.price || 0) * 82);
  const seoImageName = `product-${product.id}-${product.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}.jpg`;

  return (
    <article id={`product-${product.id}`} className="product-card">
      {/* Using plain <img> to avoid extra config. When hosting, consider downloading images
          to /public/images/<seoImageName> for SEO-friendly file names. */}
      <img
        src={product.thumbnail || product.images?.[0] || "/images/placeholder.jpg"}
        alt={`${product.title} — ${product.brand || ""} — ${product.category || ""}`}
        loading="lazy"
        width="400"
        height="300"
      />
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="price">₹{priceInINR}</p>
        <p className="desc">
          {product.description?.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </p>
      </div>
    </article>
  );
}
