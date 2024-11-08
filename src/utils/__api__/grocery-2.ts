import { cache } from "react";
import axios from "utils/axiosInstance";
import Service from "models/Service.model";
import Product from "models/Product.model";
import Category from "models/Category.model";
import { Testimonial } from "models/Grocery-2.model";
import { GroceryTwoCarouselItem } from "models/Carousel.model";
import { CategoryNavItem } from "models/CategoryNavList.model";

const getServices = cache(async (): Promise<Service[]> => {
  const response = await axios.get("/api/grocery-2/services");
  return response.data;
});

const getCategories = cache(async (): Promise<Category[]> => {
  const response = await axios.get("/api/grocery-2/categories");
  return response.data;
});

const getDiscountBannerList = cache(async () => {
  const response = await axios.get("/api/grocery-2/discount-card-list");
  return response.data;
});

const getNavigationList = cache(async () => {
  const response = await axios.get<CategoryNavItem[]>(
    "/api/grocery-2/category-navigation",
  );
  return response.data;
});

const getFeaturedProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-2/featured-products");
  return response.data;
});

const getBestSellProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-2/best-sell-products");
  return response.data;
});

const getBestHomeProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-2/home-essentials-products");
  return response.data;
});

const getDairyProducts = cache(async (): Promise<Product[]> => {
  const response = await axios.get("/api/grocery-2/more-products");
  return response.data;
});

const getTestimonials = cache(async () => {
  const response = await axios.get<Testimonial[]>(
    "/api/grocery-2/testimonial-list",
  );
  return response.data;
});

const getMainCarousel = cache(async (): Promise<GroceryTwoCarouselItem[]> => {
  const response = await axios.get("/api/grocery-2/main-carousel");
  return response.data;
});

export default {
  getServices,
  getCategories,
  getTestimonials,
  getMainCarousel,
  getDairyProducts,
  getNavigationList,
  getFeaturedProducts,
  getBestSellProducts,
  getBestHomeProducts,
  getDiscountBannerList,
};
