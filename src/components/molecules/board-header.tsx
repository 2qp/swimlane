import { Avatars } from "../atoms/avatars";
import { Badge } from "../atoms/badge";
import { EditIcon } from "../icons/edit";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import type { Board } from "@/types/board";
import type { JSX } from "react";

type BoardHeaderProps = {
  board?: Board;
};

type BoardHeaderType = (props: BoardHeaderProps) => JSX.Element | null;

const BoardHeader: BoardHeaderType = ({ board }) => {
  //

  if (!board) return null;

  return (
    <div className="p-[24px] space-y-[26px]">
      <div className="space-y-[8px]">
        {/*  */}
        <div className="flex space-x-[24px] items-center">
          <h2 className="text-custom-board-title font-semibold">
            {board?.name}
          </h2>
          <Badge
            color={board?.badge?.color || "task-yellow"}
            label={board?.status}
          />
        </div>

        <p className="text-custom-main text-neutral-5">{board?.label}</p>

        <div className="flex space-x-[18px] items-center">
          <div className="flex space-x-[18px] items-center">
            <p className="text-custom-main text-neutral-5">{"assigned"}</p>
            <Avatars users={board?.users || []} />
          </div>

          {/*  */}
          <Button
            className="text-neutral-5 rounded-[46px]"
            variant="outline"
            size="sm"
          >
            <p className="text-custom-label">{"Manage"}</p>
            <EditIcon className="fill-current" />
          </Button>
        </div>
      </div>

      <div className="gap-[24px] flex flex-col">
        <Separator />

        <div className="flex space-x-1 text-custom-secondary text-neutral-5">
          <p>{"Last updated on:"}</p>
          <p>{board?.updated}</p>
        </div>
      </div>
    </div>
  );
};

export { BoardHeader };
export type { BoardHeaderProps, BoardHeaderType };
