import Product from "@/models/Product";
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
  } catch (error) {
    return NextResponse.json({ error: "خطا در برقراری ارتباط با دیتابیس" });
  }
  const id = params.productId;
  const product = await Product.findById(id);

  if (!product) {
    return NextResponse.json({ error: "محصولی با این آیدی یافت نشد" });
  }

  return NextResponse.json(product);
}
