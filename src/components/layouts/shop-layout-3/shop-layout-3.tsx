"use client";

import { Fragment, PropsWithChildren } from "react";
// MUI
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// GLOBAL CUSTOM COMPONENTS

import Sticky from "components/sticky";
import LazyImage from "components/LazyImage";
import { Paragraph } from "components/Typography";
import { SearchInput } from "components/search-box";
import NavigationList from "components/navbar/nav-list";
import { MobileMenu } from "components/navbar/mobile-menu";
import { MobileNavigationBar } from "components/mobile-navigation";
import { Header, HeaderCart, HeaderLogin } from "components/header";
import { HeaderSearch, MobileHeader } from "components/header/mobile-header";
import {
  Topbar,
  TopbarLanguageSelector,
  TopbarSocialLinks,
} from "components/topbar";
// CUSTOM DATA MODEL
import LayoutModel from "models/Layout.model";

// ==============================================================
interface Props extends PropsWithChildren {
  data: LayoutModel;
  showFooter?: boolean;
  showMobileMenu?: boolean;
  centeredNavigation?: boolean;
}
// ==============================================================

export default function ShopLayout3({
  data,
  children,
  showMobileMenu = true,
  centeredNavigation = false,
}: Props) {
  const { header, topbar, footer, mobileNavigation } = data;

  const MOBILE_VERSION_HEADER = (
    <MobileHeader>
      <MobileHeader.Left>
        <MobileMenu navigation={header.navigation} />
      </MobileHeader.Left>

      <MobileHeader.Logo logoUrl={mobileNavigation.logo} />

      <MobileHeader.Right>
        <HeaderSearch>
          <SearchInput />
        </HeaderSearch>

        <HeaderCart />
      </MobileHeader.Right>
    </MobileHeader>
  );

  return (
    <Fragment>

      {/* HEADER */}
      <Sticky fixedOn={0} scrollDistance={300}>
        <Header mobileHeader={MOBILE_VERSION_HEADER}>
          <Header.Logo url={header.logo} />

          <Header.Mid>
            <Box mr="auto" ml={centeredNavigation ? "auto" : "2rem"}>
              <NavigationList navigation={header.navigation} />
            </Box>
          </Header.Mid>

          <Header.Right>
            <HeaderCart />
          </Header.Right>
        </Header>

        <Divider />
      </Sticky>

      {/* BODY CONTENT */}
      {children}

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      {showMobileMenu ? (
        <MobileNavigationBar navigation={mobileNavigation.version1} />
      ) : null}


    </Fragment>
  );
}
