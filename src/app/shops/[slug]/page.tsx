import { Metadata } from "next";
import { notFound } from "next/navigation";
// PAGE VIEW COMPONENT
import { ShopDetailsPageView } from "pages-sections/shops/page-view";
// API FUNCTIONS
import api from "utils/__api__/shop";
import { getFilters } from "utils/__api__/product-search";

export const metadata: Metadata = {
  title: "Shop Details - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function ShopDetails({ params }) {
  const shop = await api.getProductsBySlug((await params).slug);
  const filters = await getFilters();

  if (!shop) notFound();

  return <ShopDetailsPageView shop={shop} filters={filters} />;
}
