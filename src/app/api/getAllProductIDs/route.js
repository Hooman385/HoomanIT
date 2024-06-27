// i made this api specifically for sitemap.js to get all the products and dynamically create my sitemap objects

import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const products = await Product.find({});
  const productIDs = products.map((product) => product.id);

  return NextResponse.json(productIDs);
}
