// export default async function sitemap() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_HOST_URL}api/getAllProductIDs`
//   );
//   const productIDs = await response.json();
//   const productEntries = productIDs.map((id) => ({
//     url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}product/${id}`,
//   }));
//   return [
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}categories`,
//     },
//     ...productEntries,
//   ];
// }

import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";

export default async function sitemap() {
  await connectDB();
  const products = await Product.find({});
  const productIDs = products.map((product) => product.id);

  const productEntries = productIDs.map((id) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}product/${id}`,
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_HOST_URL}categories`,
    },
    ...productEntries,
  ];
}
