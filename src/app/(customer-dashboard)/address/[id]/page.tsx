import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS
import api from "utils/__api__/address";
// CUSTOM DATA MODEL
import { IdParamsAsync } from "models/Common";

export async function generateMetadata({
  params,
}: IdParamsAsync): Promise<Metadata> {
  const address = await api.getAddress((await params).id);
  if (!address) notFound();

  return {
    title: address.title + " - Bazaar Next.js E-commerce Template",
    description: "Bazaar is a React Next.js E-commerce template.",
    authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
    keywords: ["e-commerce", "e-commerce template", "next.js", "react"],
  };
}

export default async function Address({ params }: IdParamsAsync) {
  const address = await api.getAddress((await params).id);

  if (!address) notFound();

  return <AddressDetailsPageView address={address} />;
}
