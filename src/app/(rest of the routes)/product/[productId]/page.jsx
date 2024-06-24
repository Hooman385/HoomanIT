import ProductTemplate from "@/components/templates/ProductTemplate";
import Product from "@/models/Product";
import connectDB from "@/lib/connectDB";

export async function generateStaticParams() {
  await connectDB();
  const products = await Product.find({});
  const posts = [];

  products.map((product) => {
    return [...posts, { productId: product.id }];
  });
  return posts;
}

async function page({ params: { productId } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/getProduct/${productId}`
  );
  const result = await response.json();

  return <ProductTemplate details={result} />;
}

export default page;
