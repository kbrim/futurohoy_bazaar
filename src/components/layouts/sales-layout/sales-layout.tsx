"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, PropsWithChildren } from "react";
// CUSTOM GLOBAL COMPONENTS
import { Paragraph } from "components/Typography";
import { MobileMenu } from "components/navbar/mobile-menu";
import { MobileNavigationBar } from "components/mobile-navigation";
import { Header, HeaderCart, HeaderLogin } from "components/header";
import { HeaderSearch, MobileHeader } from "components/header/mobile-header";
import {
  Topbar,
  TopbarLanguageSelector,
  TopbarSocialLinks,
} from "components/topbar";
import { SearchInput, SearchInputWithCategory } from "components/search-box";
// CUSTOM DATA MODEL
import LayoutModel from "models/Layout.model";

// ==============================================================
interface Props extends PropsWithChildren {
  data: LayoutModel;
}
// ==============================================================

export default function SalesLayout({ children, data }: Props) {
  const { header, topbar, mobileNavigation, footer } = data;

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

      {/* HEADER AREA */}
      <Header mobileHeader={MOBILE_VERSION_HEADER}>
        <Header.Logo url={header.logo} />

        <Header.Mid>
          <SearchInputWithCategory categories={header.categories} />
        </Header.Mid>

        <Header.Right>
          {/* HEADER LOGIN BUTTON */}
          <HeaderLogin />

          {/* HEADER CART BUTTON */}
          <HeaderCart />
        </Header.Right>
      </Header>

      {/* RENDER MAIN CONTENT AREA */}
      {children}


      {/* SMALLER DEVICE NAVIGATION */}
      <MobileNavigationBar navigation={mobileNavigation.version1} />
    </Fragment>
  );
}
