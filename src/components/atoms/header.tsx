import { Icon } from "@/components/atoms/icon";
import { NotificationWithBadge } from "@/components/atoms/notification-with-badge";
import { CustomAvatar } from "@/components/molecules/custom-avatar";
import { QuerySearchBar } from "@/components/molecules/search-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Suspense } from "react";
import { SkeletonLoader } from "./skeleton";

import type { JSX } from "react";

type HeaderProps = {};

type HeaderType = (props: HeaderProps) => JSX.Element;

const Header: HeaderType = () => {
  //
  return (
    <header className="w-full justify-between bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      {/* BRANDING */}
      <div className="flex text-custom-medium font-semibold gap-[8px] items-center ">
        <Icon id="app_logo" alt="logo" className="size-[24px]" />
        <p className="gap-1 hidden md:flex">
          <span className="text-neautral-3">{"Board"}</span>
          <span className="text-primary">{"App"}</span>
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-[24px] ">
        {/* BTN */}
        <Button size={"xl"} className="hidden md:flex">
          {"Create new board"} <Plus />
        </Button>

        <div className="flex items-center gap-[12px] md:gap-[48px]">
          {/* SEARCH */}
          <Suspense fallback={<SkeletonLoader />}>
            <QuerySearchBar />
          </Suspense>

          {/*  */}
          <div className="flex gap-[14px] items-center">
            <Button variant="ghost" size="icon" className="size-8">
              <Icon id="settings" alt="settings" />
            </Button>

            <Button variant="ghost" size="icon" className="size-8">
              <NotificationWithBadge>
                <Icon id="bell" alt="bell" />
              </NotificationWithBadge>
            </Button>

            <Button variant={"ghost"} size={"icon"} className="size-8">
              <CustomAvatar src="https://github.com/shadcn.png" type="header" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
export type { HeaderProps, HeaderType };
