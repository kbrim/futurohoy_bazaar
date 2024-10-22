import { memo } from "react";
import { useRouter, usePathname } from "next/navigation";
import Pagination from "@mui/material/Pagination";
// CUSTOM GLOBAL COMPONENTS
import { Span } from "components/Typography";
import FlexBetween from "components/flex-box/flex-between";
// CUSTOM UTILITY FUNCTION
import { renderProductCount } from "lib";

// ==============================================================
interface Props {
  page: number;
  perPage: number;
  totalProducts: number;
}
// ==============================================================

export default memo(function ProductPagination({
  page,
  perPage,
  totalProducts,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <FlexBetween flexWrap="wrap" my={8}>
      <Span>{renderProductCount(page, perPage, totalProducts)}</Span>

      <Pagination
        page={page}
        color="primary"
        variant="outlined"
        count={Math.ceil(totalProducts / perPage)}
        onChange={(_, page) => {
          const searchParams = new URLSearchParams();
          if (page === 1) searchParams.delete("page");
          else searchParams.set("page", page.toString());
          router.push(`${pathname}?${searchParams.toString()}`);
        }}
      />
    </FlexBetween>
  );
});
