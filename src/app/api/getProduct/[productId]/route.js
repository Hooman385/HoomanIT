import Product from "@/models/Product";
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

import { isValidObjectId } from "mongoose";

export async function GET(req, { params }) {
  await connectDB();

  const id = params.productId;
  const isIdValid = isValidObjectId(id);

  if (!isIdValid) {
    return NextResponse.json(
      { error: "آی‌دی واردشده نادرست است" },
      { status: 400 }
    );
  }

  const product = await Product.findById(id);

  if (!product) {
    return NextResponse.json(
      { error: "محصولی با این آیدی یافت نشد" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
