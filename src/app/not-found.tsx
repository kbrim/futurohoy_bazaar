import { Metadata } from "next";
import { NotFoundPageView } from "pages-sections/not-found";

export const metadata: Metadata = {
  title: "404 - Error",
  description: "No es posible cargar esta pagina por el momento",
};

export default function NotFound() {
  return <NotFoundPageView />;
}
