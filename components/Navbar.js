export default function Navbar() {
  return (
    <>
      <nav className="navbar container">
        <a className="brand" href="/">Simple Store</a>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #f1f1f1;
          margin-bottom: 32px;
        }
        .brand {
          font-size: 20px;
          font-weight: 600;
          text-decoration: none;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .nav-links a {
          text-decoration: none;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
