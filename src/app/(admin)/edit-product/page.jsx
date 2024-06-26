import EditProductTemplate from "@/components/templates/EditProductTemplate";
import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
export const metadata = {
  title: "ویرایش محصول",
};
async function EditProductPage({ searchParams }) {
  await connectDB();
  const product = await Product.findById(searchParams.id);

  return (
    <>
      <EditProductTemplate product={JSON.parse(JSON.stringify(product))} />
    </>
  );
}

export default EditProductPage;
