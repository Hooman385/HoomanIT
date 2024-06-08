import Product from "@/models/Product";
import connectDB from "./connectDB";

// function to get products, either filtered with queries or without any query
export const getProducts = async (pageNumber, categories, searchText = "") => {
  await connectDB();
  const numberOfProducts = 8;
  const startIndex = (pageNumber - 1) * numberOfProducts;
  const productsCount = await Product.find();
  let noResults = false;
  let maxPage = Math.ceil(productsCount.length / numberOfProducts);
  let products = [];

  const sanitizedQuery = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const searchTextRegex = new RegExp(sanitizedQuery, "i");

  //   the {$in: query} from mongoose works both with a string and an array
  // $and is basically a logical AND meaning all shold be true
  if (categories[0] && !searchText) {
    products = await Product.find({ category: { $in: categories } })
      .limit(numberOfProducts)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      category: { $in: categories },
    });

    if (Math.ceil(productsCountWithQuery.length / numberOfProducts) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / numberOfProducts);
    }
  } else if (categories[0] && searchText) {
    products = await Product.find({
      $and: [
        { category: { $in: categories } },
        { title: { $regex: searchTextRegex } },
      ],
    })
      .limit(numberOfProducts)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      $and: [
        { category: { $in: categories } },
        { title: { $regex: searchTextRegex } },
      ],
    });

    if (Math.ceil(productsCountWithQuery.length / numberOfProducts) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / numberOfProducts);
    }
  } else if (!categories[0] && searchText) {
    products = await Product.find({ title: { $regex: searchTextRegex } })
      .limit(numberOfProducts)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      title: { $regex: searchTextRegex },
    });

    if (Math.ceil(productsCountWithQuery.length / numberOfProducts) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / numberOfProducts);
    }
  } else if (!categories[0] && !searchText) {
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
  return pageNumbers;
};
