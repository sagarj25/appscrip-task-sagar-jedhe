import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart — Simple Store | Sagar Jedhe</title>
      </Head>

      <Navbar />

      <main className="container">
        <h1>Cart</h1>
        <p>Your cart is empty currently.</p>
      </main>
    </>
  );
}
