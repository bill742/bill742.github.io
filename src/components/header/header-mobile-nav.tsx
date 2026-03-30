"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import IconList from "@/components/icon-list";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import HeaderNavItem from "./header-nav-item";
import ModeToggle from "./mode-toggle";
import { contactIcons, navItems } from "./nav-links";

const HeaderMobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <Menu width="32px" height="32px" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"bottom"}
          className="data-bottom:max-h-[50vh]"
          aria-describedby={undefined}
        >
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="no-scrollbar mt-4 overflow-y-auto">
            <ul className="flex flex-col gap-y-4">
              {navItems.map((navItem) => (
                <li
                  key={navItem.key}
                  className="hover:bg-accent flex justify-end"
                >
                  <HeaderNavItem
                    navItem={navItem}
                    onClose={
                      navItem.isHomeSection ? () => setOpen(false) : undefined
                    }
                  />
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-row items-center justify-end">
              <IconList
                hasText={false}
                iconInfos={contactIcons}
                className="flex flex-row gap-x-2"
              />
              <ModeToggle className="ml-2" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

HeaderMobileNav.displayName = "HeaderMobileNav";

export default HeaderMobileNav;
