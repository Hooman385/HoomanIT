import { NextResponse } from "next/server"
import Product from "@/models/Product";
import connectDB from "@/lib/connectDB";
import { revalidatePath } from 'next/cache'
// import Product from "@/models/Product"

export async function POST(req) {

    // const data = await req.formData()
    const { title, price, quantity, warranty, warrantyName, desc, colors, specs, productImages, category, index } = await req.json()

    if (!title || !desc || !warranty || !quantity || !price || !specs || !productImages || !category || !index) {
        return NextResponse.json({ error: "لطفا همه فیلدهای اجباری را پر کنید" }, { status: 400 })
    }

    if (!productImages[0]) {
        return NextResponse.json({ error: "تصویری برای محصول آپلود نشده است" }, { status: 400 })
    }


    const newProduct = {
        title,
        desc,
        category,
        colors,
        warranty,
        warrantyName,
        quantity,
        price,
        specs,
        productImages, 
        index
    }

    await connectDB()
    await Product.create(newProduct)
    revalidatePath("/categories")
    revalidatePath("/admin")


    return NextResponse.json({ message: "محصول با موفقیت ساخته شد", newProduct }, { status: 200 })
}