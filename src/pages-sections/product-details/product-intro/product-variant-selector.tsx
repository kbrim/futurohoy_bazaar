"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Chip from "@mui/material/Chip";
// GLOBAL CUSTOM COMPONENTS
import { H6 } from "components/Typography";
// DUMMY DATA
import productVariants from "data/product-variants";

export default function ProductVariantSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return productVariants.map((variant) => (
    <div className="mb-1" key={variant.id}>
      <H6 mb={1}>{variant.title}</H6>

      <div className="variant-group">
        {variant.values.map(({ id, value }) => {
          const variantNameLowerCase = variant.title.toLowerCase();

          // Base variant params on current params so we can preserve any other param state in the url.
          const optionSearchParams = new URLSearchParams(searchParams);

          // Update the variant params using the current variant to reflect how the url *would* change,
          // if the variant was clicked.
          optionSearchParams.set(variantNameLowerCase, value);

          const optionUrl = () => {
            router.push(`${pathname}?${optionSearchParams}`, { scroll: false });
          };

          // The variant is active if it's in the url params.
          const isActive = searchParams.get(variantNameLowerCase) === value;

          return (
            <Chip
              key={id}
              label={value}
              size="small"
              variant="outlined"
              onClick={optionUrl}
              color={isActive ? "primary" : "default"}
            />
          );
        })}
      </div>
    </div>
  ));
}
