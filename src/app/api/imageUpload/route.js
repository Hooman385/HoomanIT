import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { put } from "@vercel/blob";

export async function POST(req) {
  const data = await req.formData();
  const images = [];
  const { searchParams } = new URL(req.url);
  const imageGroupName = searchParams.get("imageGroupName");

  if (!data.get("image0")) {
    return NextResponse.json({
      success: false,
      error: "برای آپلود ابتدا تصاویری را انتخاب نمایید",
    });
  }
  for (const pair of data.entries()) {
    const blob = await put(`${imageGroupName}-${pair[0]}`, pair[1], {
      access: "public",
    });

    images.push(blob);
  }

  return NextResponse.json({
    success: true,
    message: "تصاویر با موفقیت آپلود شدند",
    images,
  });

  // below is the code for node.js when we write the images to a local storage on a pc
  // for (const pair of data.entries()) {
  //   const image = data.get(`${pair[0]}`);

  //   const bytes = await image.arrayBuffer();
  //   const buffer = Buffer.from(bytes);

  //   const path = join(
  //     process.env.IMAGE_PATH,
  //     "public",
  //     "productImages",
  //     image.name
  //   );
  //   await writeFile(path, buffer);
  //   images.push({ name: image.name, path: `/productImages/${image.name}` });
  // }

  // return NextResponse.json({
  //   success: true,
  //   message: "تصاویر با موفقیت آپلود شدند",
  //   images,
  // });
}
