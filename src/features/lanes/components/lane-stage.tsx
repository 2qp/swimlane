"use client";

import { Lanes } from "@/components/organisms/lanes";
import { useLaneStore } from "@/stores/swimlane.store";
import { useEffect, useState } from "react";

import type { Board } from "@/types/board";
import type { JSX } from "react";

type LaneStageProps = {
  board?: Board;
  query?: string;
  uid: string;
};

type LaneStageType = (props: LaneStageProps) => JSX.Element | null;

const LaneStage: LaneStageType = ({ board, query, uid }) => {
  //

  const { addBoard, boards } = useLaneStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!board) return;

    addBoard(board);
    setHydrated(true);
  }, [board, addBoard]);

  if (!hydrated) return null;

  return (
    <div className="w-full ">
      <Lanes uid={board?.uid || ""} lanes={boards[uid]?.lanes || []} />
    </div>
  );
};

export { LaneStage };
export type { LaneStageProps, LaneStageType };
