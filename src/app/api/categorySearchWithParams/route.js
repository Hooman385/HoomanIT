import {
  getProducts,
  updatePageNumbers,
} from "@/lib/CategoriesPaginationFunctions";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import getAllMatchingKeys from "@/lib/getMatchingKeys";
export async function GET(req) {
  const url = new URL(req.url);
  const keys = [];
  const values = [];
  let searchText;

  for (const key of url.searchParams.keys()) {
    keys.push(key);
  }
  for (const value of url.searchParams.values()) {
    values.push(value);
  }

  if (keys.includes("search")) {
    searchText = url.searchParams.get("search");
  } else {
    searchText = undefined;
  }

  // this function get all the keys that contain "category" inside them
  // i need this function because category params have an index at the end like category1 or category2
  // and there might be other params so this will only return categories
  const matchingKeys = getAllMatchingKeys(keys);
  const matchingValues = matchingKeys.map((key) => {
    if (url.searchParams.get(key)) {
      return url.searchParams.get(key);
    }
  });

  const pageNumber = url.searchParams.get("page") ?? 1;
  const [products, maxPage, noResults] = await getProducts(
    pageNumber,
    matchingValues,
    searchText
  );

  const pagesNumberRange = updatePageNumbers(pageNumber, maxPage);

  revalidatePath("/categories");

  return NextResponse.json(
    {
      products: products,
      maxPage: maxPage,
      noResults: noResults,
      pagesNumberRange: pagesNumberRange,
    },
    { status: 200 }
  );
}
