import type { Metadata } from "next";
// PAGE VIEW COMPONENT
import { GadgetThreeCategoriesPageView } from "pages-sections/gadget-3/page-view";
// CUSTOM DATA MODEL
import { SlugParamsAsync } from "models/Common";

export const metadata: Metadata = {
  title: "Gadget Products - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default async function GadgetThreeCategories({ params }: SlugParamsAsync) {
  return <GadgetThreeCategoriesPageView slug={(await params).slug} />;
}
