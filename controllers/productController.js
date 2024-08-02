const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  console.log(req.query);
  const { featured, name, rating, company, sort, fields, numberFilters } =
    req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (numberFilters) {
    const operMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regExp = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numberFilters.replace(
      regExp,
      (match) => `-${operMap[match]}-`
    );

    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(filed)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  if (fields) {
    const fieldList = fields.split(",").join(" ");
    result = result.select(fieldList);
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.number) || 10;
  const skipPage = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ status: "success", products });
};

const addProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json({ status: "Success", product });
};

module.exports = {
  getAllProducts,
  addProduct,
};
