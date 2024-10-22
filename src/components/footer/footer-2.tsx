import Link from "next/link";
import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM COMPONENTS
import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography";
// LOCAL CUSTOM COMPONENTS
import FooterApps from "./footer-apps";
import FooterSocialLinks from "./footer-social-links";
// STYLED COMPONENTS
import { StyledFooter, StyledLink } from "./styles";
// CUSTOM DATA
import {
  footerSocialLinks,
  footerCustomerCareLinks,
  footerDescription,
} from "data/layout-data";

// ==============================================================
interface Props {
  bgColor?: string;
  color?: "light" | "dark";
}
// ==============================================================

export default function Footer2({
  bgColor = "#141850",
  color = "dark",
}: Props) {
  return (
    <StyledFooter sx={{ backgroundColor: bgColor }}>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <Link href="/">
            <BazaarImage mb={2.5} src="/assets/images/logo.svg" alt="logo" />
          </Link>

          <Paragraph
            mb={2.5}
            maxWidth={370}
            color={color === "dark" ? "grey.500" : "white"}
          >
            {footerDescription}
          </Paragraph>

          <FooterApps appleStoreUrl="#" playStoreUrl="#" />
        </Grid>

        <Grid item sm={6} xs={12}>
          {/* CUSTOMER CARE LINKS */}
          <div className="links">
            {footerCustomerCareLinks.map(({ title, url }) => (
              <StyledLink isDark={color === "light"} href={url} key={title}>
                {title}
              </StyledLink>
            ))}
          </div>

          {/* SOCIAL LINKS WITH ICON */}
          <FooterSocialLinks links={footerSocialLinks} />
        </Grid>
      </Grid>
    </StyledFooter>
  );
}
