import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <Sidebar className=" background-light900_dark200 border-none" side="left">
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel>Routes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
                <section className="flex h-full flex-col gap-6 pt-16">
                  <NavLinks isMobileNav />
                </section>

                <div className="flex flex-col gap-3">
                  <Link href={ROUTES.SIGN_IN}>
                    <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                      <span className="primary-text-gradient">Log in</span>
                    </Button>
                  </Link>
                </div>
                <Link href={ROUTES.SIGN_UP}>
                  <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                    Sign up
                  </Button>
                </Link>
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
