import { Plus } from "lucide-react";
import { LaneMenu } from "../molecules/lane-menu";
import { Button } from "../ui/button";

import type { Lane } from "@/types/lane";
import type { JSX } from "react";

type LaneHeaderToolsProps = {
  uid: Lane["uid"];
};

type LaneHeaderToolsType = (props: LaneHeaderToolsProps) => JSX.Element;

const LaneHeaderTools: LaneHeaderToolsType = () => {
  return (
    <div className="flex gap-[4px] items-center">
      <Button variant="ghost" size="icon" className="size-8">
        <Plus />
      </Button>

      <LaneMenu />
    </div>
  );
};

export { LaneHeaderTools };
export type { LaneHeaderToolsProps, LaneHeaderToolsType };
