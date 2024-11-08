import { cache } from "react";
import axios from "../axiosInstance";
// CUSTOM DATA MODEL
import Story from "models/Story.model";
import Product from "models/Product.model";
import { Category } from "models/Common";

const getAllProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-4/products");
  return response.data;
});

const getAllProductsBySlug = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-4/products-by-slug");
  return response.data;
});

const getStories = cache(async (): Promise<Story[]> => {
  const response = await axios.get("/api/grocery-4/stories");
  return response.data;
});

const getCategories = cache(async (): Promise<Category[]> => {
  const response = await axios.get("/api/grocery-4/categories");
  return response.data;
});

const getBreadcrumb = cache(async (slug?: string): Promise<string> => {
  const response = await axios.get("/api/grocery-4/breadcrumb", {
    params: { slug },
  });
  return response.data;
});

export default {
  getAllProducts,
  getStories,
  getCategories,
  getBreadcrumb,
  getAllProductsBySlug,
};
