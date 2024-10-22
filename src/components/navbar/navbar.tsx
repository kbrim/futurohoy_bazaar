import { ReactNode } from "react";
// LOCAL CUSTOM COMPONENTS
import NavbarCategoryDropdown from "./navbar-category-dropdown";
// STYLED COMPONENTS
import { NavBarWrapper, InnerContainer } from "./styles";

// ==========================================================
interface Props {
  border?: number;
  elevation?: number;
  navigation: ReactNode;
  categories?: ReactNode;
}
// ==========================================================

export default function Navbar({
  elevation = 2,
  border,
  categories,
  navigation,
}: Props) {
  return (
    <NavBarWrapper hoverEffect={false} elevation={elevation} border={border}>
      <InnerContainer centered={!categories}>
        {/* CATEGORY MEGA MENU */}
        {categories ? (
          <NavbarCategoryDropdown>{categories}</NavbarCategoryDropdown>
        ) : null}

        {/* HORIZONTAL MENU */}
        {navigation}
      </InnerContainer>
    </NavBarWrapper>
  );
}
