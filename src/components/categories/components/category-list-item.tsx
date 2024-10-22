import Link from "next/link";
import { ReactNode } from "react";
import styled from "@mui/material/styles/styled";
// MUI ICON COMPONENTS
import ChevronRight from "@mui/icons-material/ChevronRight";
import IconComponent from "components/IconComponent";

// STYLED COMPONENT
export const Wrapper = styled("div")(({ theme }) => ({
  "& .category-dropdown-link": {
    height: 40,
    display: "flex",
    minWidth: "278px",
    cursor: "pointer",
    whiteSpace: "pre",
    padding: "0px 1rem",
    alignItems: "center",
    transition: "all 300ms ease-in-out",
    ".title": { flexGrow: 1, paddingLeft: "0.75rem" },
  },

  ":hover": {
    color: theme.palette.primary.main,
    background: theme.palette.action.hover,
    "& > .mega-menu": { display: "block" },
  },

  ".mega-menu": {
    top: 0,
    zIndex: 99,
    left: "100%",
    right: "auto",
    display: "none",
    position: "absolute",
  },
  ...(theme.direction === "rtl" && { ".caret-icon": { rotate: "180deg" } }),
}));

// =============================================================
interface Props {
  href: string;
  title: string;
  icon?: string;
  caret?: boolean;
  render?: ReactNode;
}
// =============================================================

export default function CategoryListItem(props: Props) {
  const { href, title, render, caret = true, icon } = props;

  return (
    <Wrapper>
      <Link href={href}>
        <div className="category-dropdown-link">
          {icon ? (
            <IconComponent icon={icon} fontSize="small" color="inherit" />
          ) : null}
          <span className="title">{title}</span>
          {caret ? (
            <ChevronRight fontSize="small" className="caret-icon" />
          ) : null}
        </div>
      </Link>

      {render ? <div className="mega-menu">{render}</div> : null}
    </Wrapper>
  );
}
