import Product from "@/models/Product";
import connectDB from "./connectDB";

export const getProducts = async (pageNumber, query) => {
  await connectDB();
  const startIndex = (pageNumber - 1) * 5;
  const productsCount = await Product.find();
  let noResults = false;
  let maxPage = Math.ceil(productsCount.length / 5);
  let products = [];

  if (query) {
    const sanitizedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(sanitizedQuery, "i");
    products = await Product.find({ title: { $regex: regex } })
      .limit(5)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      title: { $regex: regex },
    });
    if (Math.ceil(productsCountWithQuery.length / 5) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / 5);
    }
  } else {
    products = await Product.find().limit(5).skip(startIndex);
  }

  return [products, maxPage, noResults];
};

export const getPageNumbersRange = (pageNumber, maxPage) => {
  const currentPage = pageNumber;
  let start = currentPage - 2;
  let end = currentPage + 2;

  if (start < 1) {
    start = 1;
    end = Math.min(5, maxPage);
  }

  if (end > maxPage) {
    end = maxPage;
    start = Math.max(1, maxPage - 4);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export const updatePageNumbers = (pageNumber, maxPage) => {
  const pageNumbers = getPageNumbersRange(pageNumber, maxPage);
  return [...pageNumbers];
};
