import CategoryTemplate from "@/components/templates/CategoryTemplate";
import { updatePageNumbers } from "@/lib/CategoriesPaginationFunctions";

async function CategoryPage({ searchParams }) {
  // const mySearchParams = new URLSearchParams(searchParams);
  // const pageNumber =
  //   typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  // const categoryFilters = searchParams.category ?? [];

  // const response = await fetch(
  //   `http://localhost:3000/api/categorySearchWithParams/?${mySearchParams.toString()}&page=${pageNumber}`
  // );

  // const result = await response.json();

  // const pagesNumberRange = updatePageNumbers(pageNumber, result.maxPage);

  return (
    <CategoryTemplate
    // pageNumber={pageNumber}
    // maxPage={result.maxPage}
    // products={result.products}
    // noResults={result.noResults}
    // pagesNumberRange={pagesNumberRange}
    />
  );
}

export default CategoryPage;
