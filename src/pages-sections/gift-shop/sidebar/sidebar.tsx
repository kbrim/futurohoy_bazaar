import { PropsWithChildren } from "react";
// GLOBAL CUSTOM COMPONENTS
import OverlayScrollbar from "components/overlay-scrollbar";
import SideNavbar from "components/page-sidenav/side-navbar";
// STYLED COMPONENT
import { SidebarContainer } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/gift-shop";

export default async function Sidebar({ children }: PropsWithChildren) {
  const navList = await api.getCategoryNavigation();

  return (
    <SidebarContainer>
      {/* SIDE NAV BAR */}
      <OverlayScrollbar sx={{ maxHeight: 750 }}>
        <div className="sidenav">
          <SideNavbar line="dash" variant="colored" navList={navList} />
        </div>
      </OverlayScrollbar>

      <div className="page-content">{children}</div>
    </SidebarContainer>
  );
}
