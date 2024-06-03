import Product from "@/models/Product"
import connectDB from "@/lib/connectDB"
import { NextResponse } from "next/server"

export async function POST(req) {

    await connectDB()

 
    const {page, limit} = await req.json()

    const startIndex = (page - 1) * limit
    const productsCount = await Product.find()
    const maxPage = Math.ceil((productsCount.length) / limit)
    const products = await Product.find().limit(limit).skip(startIndex)
    
    if (!products) {
        return NextResponse.json({error: "products not found"})
    }

    return NextResponse.json({products, maxPage})
}