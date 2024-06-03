import Product from "@/models/Product";
import connectDB from "./connectDB";

// function to get products, either filtered with queries or without any query
export const getProducts = async (pageNumber, categories, searchText = "") => {
  
  await connectDB();
  const startIndex = (pageNumber - 1) * 8;
  const productsCount = await Product.find();
  let noResults = false;
  let maxPage = Math.ceil(productsCount.length / 8);
  let products = [];

  const sanitizedQuery = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const searchTextRegex = new RegExp(sanitizedQuery, "i");

  //   the {$in: query} from mongoose works both with a string and an array
  // $and is basically a logical AND meaning all shold be true
  if (categories[0] && !searchText) {
    products = await Product.find({ category: { $in: categories } })
      .limit(8)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      category: { $in: categories },
    });

    if (Math.ceil(productsCountWithQuery.length / 8) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / 8);
    }
  } else if (categories[0] && searchText) {
    products = await Product.find({
      $and: [
        { category: { $in: categories } },
        { title: { $regex: searchTextRegex } },
      ],
    })
      .limit(8)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      $and: [
        { category: { $in: categories } },
        { title: { $regex: searchTextRegex } },
      ],
    });

    if (Math.ceil(productsCountWithQuery.length / 8) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / 8);
    }
  } else if (!categories[0] && searchText) {
    products = await Product.find({ title: { $regex: searchTextRegex } })
      .limit(8)
      .skip(startIndex);

    const productsCountWithQuery = await Product.find({
      title: { $regex: searchTextRegex },
    });

    if (Math.ceil(productsCountWithQuery.length / 8) === 0) {
      noResults = true;
      maxPage = 1;
    } else {
      maxPage = Math.ceil(productsCountWithQuery.length / 8);
    }
  } else if (!categories[0] && !searchText) {
    products = await Product.find().limit(8).skip(startIndex);
  }

  return [products, maxPage, noResults];
};

// function to get the number of pages
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
  return pageNumbers;
};
