"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
// MUI
import Dialog from "@mui/material/Dialog";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function LoginModalPage({ children }: PropsWithChildren) {
  const router = useRouter();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("xs"),
  );

  return (
    <Dialog
      scroll="body"
      open={true}
      fullWidth={isMobile}
      onClose={router.back}
      sx={{ zIndex: 9999 }}
    >
      {children}
    </Dialog>
  );
}
