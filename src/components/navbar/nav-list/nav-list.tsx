"use client";

import MenuItem from "@mui/material/MenuItem";
// MUI ICON COMPONENTS
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// GLOBAL CUSTOM COMPONENTS
import { NavLink } from "components/nav-link";
import BazaarCard from "components/BazaarCard";
import FlexBox from "components/flex-box/flex-box";
// LOCAL CUSTOM COMPONENTS
import MegaMenu from "./mega-menu";
import NavItemChild from "./nav-item-child";
import CategoryBasedMenu from "./category-based-menu";
// STYLED COMPONENTS
import { NAV_LINK_STYLES, ChildNavListWrapper } from "../styles";
// DATA TYPES
import { Menu, MenuItemWithChild } from "models/Navigation.model";

// ==============================================================
type Props = { navigation: Menu[] };
// ==============================================================

export default function NavigationList({ navigation }: Props) {
  const renderNestLevel = (children: MenuItemWithChild[]) => {
    return children.map((nav) => {
      if (nav.child) {
        return (
          <NavItemChild nav={nav} key={nav.title}>
            {renderNestLevel(nav.child)}
          </NavItemChild>
        );
      }

      return (
        <NavLink href={nav.url} key={nav.title}>
          <MenuItem>{nav.title}</MenuItem>
        </NavLink>
      );
    });
  };

  const renderRootLevel = (list: Menu[]) => {
    return list.map((nav) => {
      // SHOW GRID MEGA MENU
      if (nav.megaMenu) {
        return (
          <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
        );
      }

      // SHOW CATEGORY BASED MEGA MENU WITH SUB ITEMS
      if (nav.megaMenuWithSub) {
        return (
          <CategoryBasedMenu
            key={nav.title}
            title={nav.title}
            menuList={nav.child}
          />
        );
      }

      // SHOW LIST MENU WITH CHILD
      if (
        nav.child &&
        nav.megaMenu === false &&
        nav.megaMenuWithSub === false
      ) {
        return (
          <FlexBox
            key={nav.title}
            alignItems="center"
            position="relative"
            flexDirection="column"
            sx={{ "&:hover": { "& > .child-nav-item": { display: "block" } } }}
          >
            <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
              {nav.title}{" "}
              <KeyboardArrowDown
                sx={{ color: "grey.500", fontSize: "1.1rem" }}
              />
            </FlexBox>

            <ChildNavListWrapper className="child-nav-item">
              <BazaarCard elevation={3} sx={{ mt: 2.5, py: 1, minWidth: 100 }}>
                {renderNestLevel(nav.child)}
              </BazaarCard>
            </ChildNavListWrapper>
          </FlexBox>
        );
      }
    });
  };

  return <FlexBox gap={4}>{renderRootLevel(navigation)}</FlexBox>;
}
