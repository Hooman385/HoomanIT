import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }

  const searchParams = url.searchParams.get("query");

  if (!searchParams) {
    return NextResponse.json({ error: "ورودی جستجو نباید خالی باشد" });
  }
  const sanitizedQuery = searchParams.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(sanitizedQuery, "i");
  const products = await Product.find({ title: { $regex: regex } });

  if (!products || products.length === 0) {
    return NextResponse.json({ error: "محصولی با این عنوان یافت نشد" });
  }

  return NextResponse.json({ data: products });
}
