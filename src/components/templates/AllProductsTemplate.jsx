import React from "react";
import AdminSearch from "../modules/Admin/AdminSearch";
import AllProductsRows from "../modules/Admin/AllProdutsRows";

function AllProductsTemplate({ search, pageNumber }) {
  return (
    <div className="w-full mx-auto">
      <AdminSearch search={search} />
      <AllProductsRows pageNumber={pageNumber} search={search} />
    </div>
  );
}

export default AllProductsTemplate;
