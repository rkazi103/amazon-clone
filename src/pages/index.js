import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <meta
          name="description"
          content="The Amazon Clone created using NextJS, Tailwind CSS, Redux, and many other technologies"
        />
        <meta name="author" content="Rayan Kazi" />
        <meta
          name="keywords"
          content="Next JS, Tailwind CSS, Redux, Stripe, Amazon"
        />
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products,
    },
  };
}
