import type { Metadata } from "next";
// PAGE VIEW COMPONENT
import GadgetThreePageView from "pages-sections/gadget-3/page-view";

export const metadata: Metadata = {
  title: "Futurohoy",
  description: 'Plataforma de comercio mayorista',
  keywords: ["e-commerce", "e-commerce futurohoy", "mayorista", "react"],
};

export default function GadgetThree() {
  return <GadgetThreePageView />;
}
