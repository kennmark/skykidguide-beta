import React, { useEffect, useState } from "react";
import { IconButton, Drawer } from "@material-tailwind/react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import SideBar from "./SideBar";

export function SideBarContainer() {
  console.log("SideBarContainer rendered");
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);

      if (desktop) {
        setOpen(false);
      }
    };

     window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";

      return () => {
        document.body.style.overflow = "unset";
      };
  }, [open]);

    if (isDesktop) {
      return <SideBar />;
    }

  // Mobile Drawer
  return (
    <>
      {!open && (
        <IconButton
          onClick={() => setOpen(true)}
          color="amber"
          size="lg"
          className="fixed bottom-6 left-0 z-50 rounded-r-full"
        >
          <ChevronDoubleRightIcon className="h-6 w-6" />
        </IconButton>
      )}

      <Drawer
        open={open}
        onClose={closeDrawer}
        size={320}
        className="p-0 overflow-hidden"
      >
        <SideBar closeDrawer={closeDrawer} />
      </Drawer>
    </>
  );
}