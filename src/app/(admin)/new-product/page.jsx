import NewProductTemplate from "@/components/templates/NewProductTemplate";
import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";

export const metadata = {
  title: "افزودن محصول جدید",
};
async function NewProductPage() {
  await connectDB();


  const lastProduct = await Product.findOne().sort({ createdAt: -1 });


  return <NewProductTemplate currentIndex={lastProduct.index + 1} />;
}

export default NewProductPage;
