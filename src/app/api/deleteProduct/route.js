import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const url = new URL(req.url);

  await connectDB();
  const productToDelete = await Product.findById({
    _id: url.searchParams.get("id"),
  });
  if (!productToDelete) {
    return NextResponse.json({ error: "product for deletion not found" });
  }
  const date = new Date(productToDelete.createdAt);
  const products = await Product.find({ createdAt: { $gt: date } });
  products.forEach(async (product) => {
    product.index--;
    await product.save();
  });
  const result = await Product.deleteOne({ _id: url.searchParams.get("id") });

  if (result.deletedCount !== 1) {
    return NextResponse.json({ error: "error, product not deleted" });
  }

  revalidatePath("/admin");

  return NextResponse.json(
    { message: "product deleted successfuly" },
    { status: 200 }
  );
}
