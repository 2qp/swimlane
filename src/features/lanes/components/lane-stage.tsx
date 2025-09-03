"use client";

import { Lanes } from "@/components/organisms/lanes";
import { useLaneStore } from "@/stores/swimlane.store";
import { use, useEffect, useRef, useState } from "react";

import type { Board } from "@/types/board";
import type { JSX } from "react";

type LaneStageProps = {
  board: Promise<Board | undefined>;
  query?: string;
  uid: string;
};

type LaneStageType = (props: LaneStageProps) => JSX.Element | null;

const LaneStage: LaneStageType = ({ board: promisedBoard, query, uid }) => {
  //

  const board = use(promisedBoard);

  const { addBoard, boards } = useLaneStore();

  useEffect(() => {
    if (!board) return;

    addBoard(board);
  }, [addBoard, board]);

  return (
    <div className="w-full ">
      <Lanes uid={board?.uid || ""} lanes={boards?.[uid]?.lanes || []} />
    </div>
  );
};

export { LaneStage };
export type { LaneStageProps, LaneStageType };
