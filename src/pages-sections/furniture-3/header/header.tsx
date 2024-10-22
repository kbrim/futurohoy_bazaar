"use client"
import Link from "next/link";
import { Fragment } from "react";
// MUI
import { HeaderCart} from 'components/header'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// ICON COMPONENTS
import Menu from "@mui/icons-material/Menu";

import { Link as Scroll } from "react-scroll";
import clsx from "clsx";
// CUSTOM COMPONENT
import SideNav from "components/side-nav";
import Image from "components/BazaarImage";
import FlexBox from "components/flex-box/flex-box";
// HOOKS
import useHeader from "./use-header";

const headerHeight = 72;

// STYLED COMPONENT
import { HeaderWrapper } from "./styles";

export default function Header() {
  const { downSM, isFixed, open, toggleSidenav } = useHeader();

  return (
    <Fragment>
      <HeaderWrapper>
        <div className={clsx({ fixedHeader: isFixed })}>
          <Container>
            <FlexBox height={headerHeight} alignItems="center">
              <Scroll to="top" duration={400} smooth={true} isDynamic>
                <Box sx={{ cursor: "pointer" }}>
                  <Image
                    width="96px"
                    height="44px"
                    src="/assets/images/logo2.svg"
                    alt="logo"
                  />
                </Box>
              </Scroll>

              <Box mx="auto" />

              <FlexBox className="right-links" alignItems="center">

                <a href="" target="__blank">
                  <Typography
                    className="link"
                    color="grey.600"
                    p="0.25rem 1.25rem"
                  >
                    Contactanos 
                  </Typography>
                </a>
              </FlexBox>

              {downSM ? (
                <SideNav
                  open={open}
                  width={260}
                  position="right"
                  toggle={toggleSidenav}
                  handler={(handle) => (
                    <IconButton onClick={handle}>
                      <Menu />
                    </IconButton>
                  )}
                >
                  <Box
                    p={2}
                    sx={{
                      "& .link": {
                        cursor: "pointer",
                        transition: "color 250ms ease-in-out",
                        "&:hover": { color: "primary.main" },
                      },
                    }}
                  >
                  </Box>
                </SideNav>
              ) : (
                
                  <HeaderCart />
               
              )}
            </FlexBox>
          </Container>
        </div>
      </HeaderWrapper>

      {isFixed && <Box height={headerHeight} />}
    </Fragment>
  );
}
