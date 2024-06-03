import { getProducts } from "@/lib/CategoriesPaginationFunctions";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const [products, maxPage, noResults] = await getProducts(
    body.pageNumber,
    body.categoryFilters,
    body.limit
  );
  // return NextResponse.json({ message: "request received" });
  return NextResponse.json({ products, maxPage, noResults });
}
