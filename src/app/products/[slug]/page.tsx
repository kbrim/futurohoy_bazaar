import { Metadata } from "next";
import { notFound } from "next/navigation";
// PAGE VIEW COMPONENT
import { ProductDetailsPageView } from "pages-sections/product-details/page-view";
// API FUNCTIONS
import api from "utils/__api__/products";
import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/__api__/related-products";
// CUSTOM DATA MODEL
import { SlugParamsAsync } from "models/Common";

export async function generateMetadata({
  params,
}: SlugParamsAsync): Promise<Metadata> {
  const product = await api.getProduct((await params).slug);
  if (!product) notFound();

  return {
    title: product.title + " - Bazaar Next.js E-commerce Template",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
  };
}

export default async function ProductDetails({ params }: SlugParamsAsync) {
  const [product, relatedProducts, frequentlyBought] = await Promise.all([
    api.getProduct((await params).slug),
    getRelatedProducts(),
    getFrequentlyBought(),
  ]);

  if (!product) notFound();

  return (
    <ProductDetailsPageView
      product={product}
      relatedProducts={relatedProducts}
      frequentlyBought={frequentlyBought}
    />
  );
}
