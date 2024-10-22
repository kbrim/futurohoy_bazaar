import type { Metadata } from "next";
// PAGE VIEW COMPONENT
import FurnitureThreePageView from "pages-sections/furniture-3/page-view";

export const metadata: Metadata = {
  title: "Futurohoy",
  description: 'Pagina de ventas al por mayor',
  authors: [{ name: "Futurohoy", url: "Karin Bugueno Riquelme" }],
  keywords: ["e-commerce", "e-commerce"],
};

export default function FurnitureThree() {
  return <FurnitureThreePageView />;
}
