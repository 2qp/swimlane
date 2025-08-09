import { LaneBadge } from "./lane-badge";
import { LaneHeaderTools } from "./lane-header-tools";

import type { Lane } from "@/types/lane";
import type { JSX } from "react";
import type { LaneBadgeProps } from "./lane-badge";

type LaneHeaderProps = {
  badge?: LaneBadgeProps;
  uid: Lane["uid"];
};

type LaneHeaderType = (props: LaneHeaderProps) => JSX.Element;

const LaneHeader: LaneHeaderType = ({ badge, uid }) => {
  //
  return (
    <div className="p-[14px] bg-background border-b border-b-neutral-6">
      <div className="flex justify-between  h-[30px]">
        <LaneBadge {...badge} />
        <LaneHeaderTools uid={uid} />
      </div>
    </div>
  );
};

export { LaneHeader };
export type { LaneHeaderProps, LaneHeaderType };
