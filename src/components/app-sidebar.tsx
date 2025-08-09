"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "@/components/version-switcher";
import { LogOutButton } from "@/features/auth/components/logout-button";
import { usePathname } from "next/navigation";
import * as React from "react";
import { SidebarCollapsible } from "./organisms/sidebar-collapsible";

import type { SidebarItem } from "./organisms/sidebar-collapsible";

type AppSideBar = {
  versions: string[];
  navMain: SidebarItem[];
};

// This is sample data.
const data: AppSideBar = {
  versions: ["Root folder", "Sample ws"],
  navMain: [
    {
      title: "Dashboard",
      uid: "01",
      items: [],
      url: "/dashboard",
      type: "default",
      icon: "grid",
    },

    {
      title: "Boards",
      uid: "02",
      enabled: false,
      url: "/board",
      icon: "folder",
      items: [
        {
          title: "Create routes",
          uid: "child-01",
          url: "/board-main",
          enabled: false,
        },
        {
          title: "Delepment React Apps",
          uid: "child-02",
          url: "/react-apps",
        },
        { title: "Sport Xi Project", uid: "child-03", url: "/xi-project" },
        { title: "Wordpress theme", uid: "child-04", url: "/wp-theme" },
      ],
      type: "expandable",
    },

    {
      title: "Messages",
      uid: "03",
      items: [],
      url: "/messages",
      type: "default",
      icon: "remark",
    },
    {
      title: "Calendar",
      uid: "04",
      items: [],
      url: "/calendar",
      type: "default",
      icon: "calendar",
    },
    {
      title: "Team members",
      uid: "05",
      items: [],
      url: "/team",
      type: "default",
      icon: "team",
    },
  ],
};

const FOOTER_DATA: SidebarItem[] = [
  {
    title: "Support",
    uid: "03",
    items: [],
    url: "/support",
    type: "default",
    icon: "info",
  },
  // {
  //   title: "Calendar",
  //   uid: "04",
  //   items: [],
  //   url: "/calendar",
  //   type: "default",
  //   icon: "calendar",
  // },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  //

  const pathName = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="">
        <div className="max-w-[240px] mx-auto w-full">
          <VersionSwitcher
            versions={data.versions}
            defaultVersion={data.versions[0]}
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <div className="w-full flex flex-col  mx-auto max-w-[240px]">
          {data.navMain.map((item) => {
            //

            return (
              <SidebarCollapsible path={pathName} key={item.uid} item={item} />
            );
          })}
        </div>
      </SidebarContent>

      <SidebarFooter className="absolute bottom-[63px] w-full px-0">
        <div className="w-full flex flex-col  mx-auto max-w-[240px]">
          {FOOTER_DATA.map((item) => {
            //

            return (
              <SidebarCollapsible path={pathName} key={item.uid} item={item} />
            );
          })}

          {/*  */}
          <LogOutButton />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
