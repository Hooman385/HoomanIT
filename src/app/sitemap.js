import Product from "@/models/Product";

export default async function sitemap() {
  const products = await Product.find({});
  const productEntries = products.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}/product/${product.id}`,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}/categories`,
    },
    ...productEntries,
  ];
}
