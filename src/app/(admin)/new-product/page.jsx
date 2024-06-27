import NewProductTemplate from "@/components/templates/NewProductTemplate";
import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";

export const metadata = {
  title: "افزودن محصول جدید",
};
async function NewProductPage() {
  await connectDB();

  const products = await Product.find();

  const numberOfAllProducts = products.length;

  return <NewProductTemplate currentIndex={numberOfAllProducts + 1} />;
}

export default NewProductPage;
