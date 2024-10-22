import { Metadata } from "next";
import IndexPageView from "pages-sections/landing/page-view";

export const metadata: Metadata = {
  title: "Futurohoy",
  description: 'Build SEO friendly Online store, delivery app and Multi vendor store',
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
};

export default function IndexPage() {
  return <IndexPageView />;
}
