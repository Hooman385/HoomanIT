import EditProductTemplate from "@/components/templates/EditProductTemplate";
import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
import { Toaster } from "react-hot-toast";

async function EditProductPage({ searchParams }) {
  await connectDB();
  const product = await Product.findById(searchParams.id);

  return (
    <>
      <EditProductTemplate product={JSON.parse(JSON.stringify(product))} />
      <Toaster />
    </>
  );
}

export default EditProductPage;
