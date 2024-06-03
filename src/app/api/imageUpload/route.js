import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(req) {
  const data = await req.formData();
  const images = []

  if (!data.get("image0")) {

    return NextResponse.json({
      success: false,
      error: "برای آپلود ابتدا تصاویری را انتخاب نمایید",
    });

  }


  for (const pair of data.entries()) {
    const image = data.get(`${pair[0]}`)


    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = join("/", "Users", "Dread", "OneDrive", "Desktop", "Next stuff", "hooman-it", "public", "productImages", image.name);
    await writeFile(path, buffer)
    images.push({ name: image.name, path: `/productImages/${image.name}` })

  }


  return NextResponse.json({ success: true, message: "تصاویر با موفقیت آپلود شدند", images });
}
