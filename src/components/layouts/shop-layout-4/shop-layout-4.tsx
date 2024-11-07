"use client";

import { Fragment, PropsWithChildren, useCallback, useState } from "react";
// GLOBAL CUSTOM COMPONENTS
import Sticky from "components/sticky";
import StickyWrapper from "components/sticky-wrapper";
import SideNavbarTwo from "components/page-sidenav/side-navbar-2";

import { CategoryList } from "components/categories";
import { MobileMenu } from "components/navbar/mobile-menu";
import { MobileNavigationBar } from "components/mobile-navigation";
import { Header, HeaderCart, HeaderLogin } from "components/header";
import { MobileHeader, HeaderSearch } from "components/header/mobile-header";
import {
  Topbar,
  TopbarLanguageSelector,
  TopbarSocialLinks,
} from "components/topbar";
import { SearchInputWithCategory, SearchInput } from "components/search-box";
// LOCAL CUSTOM COMPONENTS
import Footer from "./footer";
// CUSTOM DATA MODEL
import { Category } from "models/Common";
import LayoutModel from "models/Layout.model";

// ==============================================================
interface Props extends PropsWithChildren {
  data: LayoutModel;
  navigation: Category[];
}
// ==============================================================

export default function ShopLayout4({ children, navigation, data }: Props) {
  const { topbar, header, mobileNavigation } = data;

  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);

  // SIDEBAR FOOTER LINKS
  const footerLinks = [
    { title: "Terms", url: "/" },
    { title: "Privacy", url: "/" },
    { title: "Help", url: "/" },
  ];

  // SIDEBAR CONTENT
  const Sidebar = (
    <Fragment>
      <SideNavbarTwo navigation={navigation} />
    </Fragment>
  );

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
    <div className="bg-white">


      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header mobileHeader={MOBILE_VERSION_HEADER}>
          <Header.Logo url={header.logo} />
          {isFixed ? (
            <Header.CategoryDropdown>
              <CategoryList categories={header.categoryMenus} />
            </Header.CategoryDropdown>
          ) : null}

          <Header.Mid>
            <SearchInputWithCategory categories={header.categories} />
          </Header.Mid>

          <Header.Right>

            {/* HEADER CART BUTTON */}
            <HeaderCart />
          </Header.Right>
        </Header>
      </Sticky>

      {/* BODY CONTENT */}
      <StickyWrapper SideNav={Sidebar}>{children}</StickyWrapper>

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar navigation={mobileNavigation.version1} />
    </div>
  );
}
