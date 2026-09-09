"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max_w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu "
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className=" cursor-pointer flex items-center gap-1 px-4 "
          >
            <Image
              src="/icons/logo.svg"
              width={40}
              height={40}
              alt="Horizon logo"
            />
            <h1
              className="text-26 
              font-ibm-plex-serif font-bold
             text-black-1"
            >
              {" "}
              Horizon{" "}
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-6 px-5 pt-16 text-black-2">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  <SheetClose
                    key={item.route}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                        key={item.label}
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />

                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    }
                  ></SheetClose>
                );
              })}
              USER
              <footer>FOOTER</footer>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
