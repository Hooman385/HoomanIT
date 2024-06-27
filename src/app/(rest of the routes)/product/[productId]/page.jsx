import ProductTemplate from "@/components/templates/ProductTemplate";
import Product from "@/models/Product";
import connectDB from "@/lib/connectDB";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { productId } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/getProduct/${productId}`
  );
  if (!response.ok) {
    notFound();
  }
  const { title } = await response.json();

  return {
    title: title,
  };
}

export async function generateStaticParams() {
  await connectDB();
  const products = await Product.find({});
  const posts = [];
  products.map((product) => {
    return [...posts, { productId: product.id }];
  });
  return posts.slice(0, 25);
}

async function page({ params: { productId } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/getProduct/${productId}`
  );

  if (!response.ok) {
    notFound();
  }
  const result = await response.json();

  return <ProductTemplate details={result} />;
}

export default page;
