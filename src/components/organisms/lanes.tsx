"use client";
import { useLaneDropTargets } from "@/hooks/use-lane-drop-targets";
import { useLaneStore } from "@/stores/swimlane.store";
import { taskFilter } from "@/utils/task-filter";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Lane as LaneComponent } from "./lane";

import type { Lane } from "@/types/lane";
import type { JSX } from "react";

type LanesProps = {
  lanes: Lane[];
  uid: string;
};

type LanesType = (props: LanesProps) => JSX.Element;

const Lanes: LanesType = ({ lanes: rawLanes, uid }) => {
  //

  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  const lanes = taskFilter({ lanes: rawLanes, query: search || "" });

  const { moveTask } = useLaneStore();

  const handleDropCard = (
    fromLaneId: string,
    toLaneId: string,
    taskId: string
  ) => {
    // setLanes((prev) => {
    //   const next = structuredClone(prev);
    //   const from = next.find((l) => l.uid === fromLaneId);
    //   const to = next.find((l) => l.uid === toLaneId);
    //   if (!from || !to) return prev;

    //   const index = from.tasks.findIndex((c) => c.uid === cardId);
    //   if (index === -1) return prev;

    //   const [movedCard] = from.tasks.splice(index, 1);
    //   to.tasks.push(movedCard);

    //   return next;
    // });

    // should use server actions.. / server first
    moveTask({
      boardUid: uid,
      fromLaneUid: fromLaneId,
      toLaneUid: toLaneId,
      taskUid: taskId,
    });
  };

  useLaneDropTargets({ lanes, containerRefs, onDropCard: handleDropCard });

  return (
    <div className="grid grid-cols-4  bg-gray-100 min-h-screen">
      {lanes.map((lane) => (
        <div
          key={lane.uid}
          ref={(el) => {
            containerRefs.current[lane.uid] = el;
          }}
          className="bg-gray-100 flex flex-col gap-3  overflow-auto border-r border-t border-neutral-6"
        >
          <LaneComponent lane={lane} />
        </div>
      ))}
    </div>
  );
};

export { Lanes };
export type { LanesProps, LanesType };
