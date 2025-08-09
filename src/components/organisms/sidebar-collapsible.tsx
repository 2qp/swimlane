import { ChevronRight } from "lucide-react";
import { Link } from "../atoms/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

import { cn } from "@/lib/utils";
import { useMemo, type JSX } from "react";
import { IconPipe } from "../icons/icon-pipe";
import { Button } from "../ui/button";

import type { IconMap } from "../icons";
import { Badge } from "../atoms/badge";

type SidebarItem = {
  uid: string;
  title: string;
  enabled?: boolean;
  url: string;
  icon?: IconMap | (string & {});

  count?: string;

  type: "expandable" | "default";

  items: Omit<SidebarItem, "items" | "type">[];
};

type SidebarCollapsibleProps = {
  item: SidebarItem;
  path: string;
};

type SidebarCollapsibleType = (props: SidebarCollapsibleProps) => JSX.Element;

const SidebarCollapsible: SidebarCollapsibleType = ({ item, path }) => {
  //

  const isExpandable = useMemo(() => item.type === "expandable", [item.type]);

  const isParentActive = useMemo(() => {
    if (!item.url) return false;

    return path.startsWith(item.url);
  }, [item.url, path]);

  return (
    <Collapsible
      key={item.title}
      title={item.title}
      defaultOpen={item.enabled}
      className="group/collapsible max-w-[240px] "
    >
      <SidebarGroup className="gap-[8px] px-0 ">
        {/* SINGLLE */}
        {!isExpandable && (
          <SidebarGroupLabel
            asChild
            className="h-[48px] !text-custom-main !font-medium data-[active=true]:text-primary text-neutral-4 border-2 border-transparent data-[active=true]:border-neutral-7  group/label hover:bg-sidebar-accent hover:text-sidebar-accent-foreground "
            data-active={isParentActive}
          >
            <Link
              href={item.url || ""}
              className="space-x-[20px] flex items-center justify-between"
            >
              <div className="flex items-center space-x-[20px]">
                <IconPipe
                  color="data-[active=true]:text-primary"
                  iconName={item.icon || ""}
                />
                <span>{item.title}</span>
              </div>
              {item?.count && (
                <Badge
                  label="3"
                  color="menu-orange"
                  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                />
              )}
            </Link>
          </SidebarGroupLabel>
        )}

        {/* MULTI */}
        {isExpandable && (
          <SidebarGroupLabel
            asChild
            data-active={isParentActive}
            className={cn(
              "group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm",
              "h-[48px] border-2 border-transparent data-[active=true]:border-neutral-7",
              "text-neutral-4 data-[active=true]:text-primary"
            )}
          >
            <CollapsibleTrigger className="flex ">
              <div className="space-x-[20px] flex items-center">
                <IconPipe
                  color="data-[active=true]:text-primary "
                  iconName={"folder"}
                />

                <p>{item.title}</p>
              </div>
              <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
        )}

        {isExpandable && (
          <CollapsibleContent className=" border-2 border-neutral-7 rounded-[8px] p-[12px]">
            <SidebarGroupContent>
              <SidebarMenu className="gap-[12px]">
                {item.items.map((subItem) => {
                  //
                  const fullChildPath = `${item.url.replace(
                    /\/$/,
                    ""
                  )}/${subItem.url.replace(/^\//, "")}`;

                  const isChildActive = path === fullChildPath;

                  return (
                    <SidebarMenuItem key={subItem.title} className="h-[24px]">
                      <SidebarMenuButton
                        className="data-[active=true]:text-primary data-[active=true]:bg-background text-custom-secondary text-neutral-5"
                        asChild
                        isActive={isChildActive}
                      >
                        <Button
                          className=" justify-start"
                          asChild
                          variant="link"
                          size="sm"
                        >
                          <div className="">
                            <ChevronRight />

                            <Link href={item.url + (subItem.url || "")}>
                              {subItem.title}
                            </Link>
                          </div>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        )}
      </SidebarGroup>
    </Collapsible>
  );
};

export { SidebarCollapsible };
export type { SidebarCollapsibleProps, SidebarCollapsibleType, SidebarItem };
