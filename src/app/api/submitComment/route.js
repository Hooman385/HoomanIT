import Product, { Comment } from "@/models/Product";
import connectDB from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { body, title, productId, authorId, authorName } = await req.json();
  if (!body || !title) {
    return NextResponse.json(
      { error: "عنوان و متن دیدگاه وارد نشده است" },
      { status: 400 }
    );
  }

  if (!productId || !authorId || !authorName) {
    return NextResponse.json(
      { error: "خطا در ثبت دیدگاه، با پشتیبانی تماس بگیرید" },
      { status: 500 }
    );
  }
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "error in connecting to db" },
      { status: 500 }
    );
  }

  const product = await Product.findById(productId);

  if (!product) {
    return NextResponse.json({ error: "product not found" }, { status: 500 });
  }

  const newComment = await Comment.create({
    title: title,
    body: body,
    authorId: authorId,
    authorName: authorName,
  });

  await product.comments.push(newComment);
  await product.save();

  revalidatePath(`/product/${productId}`);

  return NextResponse.json(
    { message: "دیدگاه با موفقیت ثبت شد" },
    { status: 201 }
  );
}
