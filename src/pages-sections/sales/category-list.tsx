import { forwardRef, memo } from "react";
import { useParams, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
// CUSTOM GLOBAL COMPONENTS
import { H5 } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
import IconComponent from "components/IconComponent";
// STYLED COMPONENTS
import { CategoryBoxWrapper, StyledChip } from "./styles";
// CATEGORY INTERFACE MODEL
import Category from "models/Category.model";

// ==============================================================
type Props = { categories: Category[] };
// ==============================================================

const CategoryList = forwardRef<HTMLDivElement, Props>(
  ({ categories }, ref) => {
    const router = useRouter();
    const params = useParams<{ slug: string }>();

    return (
      <Box mb={4} overflow="hidden" ref={ref}>
        <FlexBox m={-1.5} flexWrap="wrap">
          {categories.map((item) => {
            const selectedItem = item.slug === params.slug ? 1 : 0;

            return (
              <CategoryBoxWrapper
                key={item.slug}
                selected={selectedItem}
                onClick={() => router.push(`/sales-1/${item.slug}`)}
              >
                <IconComponent
                  icon={item.icon}
                  fontSize="inherit"
                  sx={{ fontSize: 44 }}
                  color={selectedItem ? "primary" : "secondary"}
                />

                <H5 color={selectedItem ? "primary.main" : "inherit"}>
                  {item.name}
                </H5>

                <StyledChip
                  size="small"
                  color="primary"
                  label="Upto 40% off"
                  selected={selectedItem}
                />
              </CategoryBoxWrapper>
            );
          })}
        </FlexBox>
      </Box>
    );
  },
);

export default memo(CategoryList);
