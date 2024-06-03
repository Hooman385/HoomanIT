import connectDB from "@/lib/connectDB";
import Product from "@/models/Product";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  await connectDB();
  const {
    title,
    id,
    price,
    quantity,
    warranty,
    warrantyName,
    desc,
    colors,
    specs,
    productImages,
    category,
  } = await req.json();

  if (
    !title ||
    !desc ||
    !warranty ||
    !quantity ||
    !price ||
    !specs ||
    !category
  ) {
    return NextResponse.json(
      { error: "لطفا همه فیلدهای اجباری را پر کنید" },
      { status: 400 }
    );
  }

  // if (!productImages[0]) {
  //     return NextResponse.json({ error: "تصویری برای محصول آپلود نشده است" }, { status: 400 })
  // }

  const oldProduct = await Product.findById(id);

  const updatedProduct = {
    title,
    desc,
    category,
    colors,
    warranty,
    warrantyName,
    quantity,
    price,
    specs,
    productImages: productImages ? productImages : oldProduct.productImages,
  };

  const product = await Product.findOneAndUpdate({ _id: id }, updatedProduct, {
    new: true,
  });
  //   await product.save();

  revalidatePath("/admin");
  revalidatePath(`/product/${id}`);
  revalidatePath("/categories");

  return NextResponse.json({
    message: "updates received",
    updatedProduct: product,
  });
}
