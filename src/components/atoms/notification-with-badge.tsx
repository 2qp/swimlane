import { Badge } from "@/components/ui/badge";

import type { JSX, ReactNode } from "react";

type NotificationWithBadgeProps = {
  children: ReactNode;
  count?: string;
};

type NotificationWithBadgeType = (
  props: NotificationWithBadgeProps
) => JSX.Element;

const NotificationWithBadge: NotificationWithBadgeType = ({
  children,
  count,
}) => {
  //
  return (
    <div className="relative">
      {children}
      <Badge
        variant="default"
        className="absolute -top-0 -right-0 bg-orange h-[6px] w-[6px] rounded-full p-0 flex items-center justify-center"
      >
        {count}
      </Badge>
    </div>
  );
};

export { NotificationWithBadge };
export type { NotificationWithBadgeProps, NotificationWithBadgeType };
