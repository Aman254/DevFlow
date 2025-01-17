import Navbar from "@/components/navigation/navbar";
import AppSidebar from "@/components/navigation/navbar/app-sidebar";
import HomeNavigation from "@/components/navigation/navbar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <main>
        <Navbar />
        <SidebarTrigger />
        {children}
        <AppSidebar />
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
