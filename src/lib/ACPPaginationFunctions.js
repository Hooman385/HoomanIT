import Product from "@/models/Product";
import connectDB from "./connectDB";

export const getProducts = async (pageNumber, query) => {
  await connectDB();
  const numberOfProducts = 5; //to show in each page
  const startIndex = (pageNumber - 1) * numberOfProducts;
  const productsCount = await Product.find();
  let noResults = false;
  let maxPage =
    Math.ceil(productsCount.length / numberOfProducts) > 0
      ? Math.ceil(productsCount.length / numberOfProducts)
      : 1;
  let products = [];

  if (query) {
    const sanitizedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(sanitizedQuery, "i");
    products = await Product.find({ title: { $regex: regex } })
      .limit(numberOfProducts)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      title: { $regex: regex },
    });
    if (Math.ceil(productsCountWithQuery.length / numberOfProducts) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / numberOfProducts);
    }
  } else {
    products = await Product.find().limit(numberOfProducts).skip(startIndex);
  }
  return [products, maxPage, noResults];
};

// Function to get the range of page numbers to display
export const getPageNumbersRange = (pageNumber, maxPage) => {
  const distanceToFirstAndLastPages = 2; // Since I want my range to have 5 pages, the current page needs to have a distance of 2 pages from both the first and last pages in the current range

  const currentPage = pageNumber;
  let start = currentPage - distanceToFirstAndLastPages; // Start of the range, 2 pages before the current page
  let end = currentPage + distanceToFirstAndLastPages; // End of the range, 2 pages after the current page

  if (start < 1) {
    start = 1;
    end = Math.min(5, maxPage); // Ensure the end does not exceed the maximum number of pages
  }
  // If end exceeds the maxPage, adjust the range to end at maxPage and extend the start accordingly
  if (end > maxPage) {
    end = maxPage;
    start = Math.max(1, maxPage - 4); // Ensure the start does not go below 1
  }

  // Create an array of page numbers from start to end
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export const updatePageNumbers = (pageNumber, maxPage) => {
  const pageNumbers = getPageNumbersRange(pageNumber, maxPage);
  return [...pageNumbers];
};
