"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// MUI
import Drawer from "@mui/material/Drawer";
// GLOBAL CUSTOM COMPONENTS
import { MiniCart } from "components/mini-cart";

export default function MiniCartDrawer() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setOpen(true), []);

  const onClose = () => {
    setOpen(false);
    router.back();
  };

  return (
    <Drawer open={open} anchor="right" onClose={onClose} sx={{ zIndex: 9999 }}>
      <MiniCart toggleSidenav={onClose} />
    </Drawer>
  );
}
