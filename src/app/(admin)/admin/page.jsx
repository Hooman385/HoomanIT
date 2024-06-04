import AllProductsTemplate from "@/components/templates/AllProductsTemplate";

async function MainAdminPage({ searchParams }) {
  const pageNumber =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return <AllProductsTemplate  pageNumber={pageNumber} search={search} />;
}

export default MainAdminPage;
