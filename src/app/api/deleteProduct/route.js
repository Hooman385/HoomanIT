import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const url = new URL(req.url);

  await connectDB();
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
