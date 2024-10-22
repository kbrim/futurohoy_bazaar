import { Metadata } from "next";
import { SalesOnePageView } from "pages-sections/sales/page-view";
// SALES API FUNCTIONS
import api from "utils/__api__/sales";
// CUSTOM TYPES
import { SlugParams } from "models/Common";

export const metadata: Metadata = {
  title: "Sales 1 - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

// ==============================================================
interface Props extends SlugParams {
  searchParams: { [key: string]: string };
}
// ==============================================================

export default async function SalesWithCategoryPage({
  params,
  searchParams,
}: Props) {
  const page = +searchParams.page || 1;

  const categories = await api.getCategories();
  const data = await api.getProducts(page, params.slug);

  if (!categories || !data) {
    return <div>Failed to load</div>;
  }

  if (!data.products) {
    return <div>No products found</div>;
  }

  return (
    <SalesOnePageView
      page={page}
      categories={categories}
      products={data.products}
      pageSize={data.pageSize}
      totalProducts={data.totalProducts}
      offer="Flash Deals,"
      discount="Enjoy Upto 80% discounts"
    />
  );
}
