"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

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

  // Close drawer when viewport becomes desktop-width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 976) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {/* Hamburger — three-bar icon, matches nav height */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="border-border text-foreground hover:bg-accent hover:text-primary h-9 w-9 border"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        {/* Top sheet — slides down from the header */}
        <SheetContent
          side="top"
          className="border-border bg-background/95 border-b pt-16 backdrop-blur-md"
          aria-describedby={undefined}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>

          <div className="container mx-auto max-w-6xl px-6 pb-6">
            {/* Nav links */}
            <ul className="flex flex-col">
              {navItems.map((navItem) => (
                <li key={navItem.key}>
                  <HeaderNavItem
                    navItem={navItem}
                    mobile
                    onClose={
                      navItem.isHomeSection ? () => setOpen(false) : undefined
                    }
                  />
                </li>
              ))}
            </ul>

            {/* Social icons + theme toggle */}
            <div className="border-border mt-6 flex flex-row items-center justify-end gap-x-3 border-t pt-4">
              <IconList
                hasText={false}
                iconInfos={contactIcons}
                className="flex flex-row gap-x-2"
              />
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

HeaderMobileNav.displayName = "HeaderMobileNav";

export default HeaderMobileNav;
