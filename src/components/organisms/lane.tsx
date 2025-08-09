import { LaneHeader } from "../atoms/lane-header";
import { DraggableTask } from "../molecules/draggable-task";

import type { Lane as LaneItem } from "@/types/lane";
import type { JSX } from "react";

type LaneProps = {
  lane: LaneItem;
};

type LaneType = (props: LaneProps) => JSX.Element;

const Lane: LaneType = ({ lane }) => {
  //

  return (
    <div className="flex flex-col gap-[15px] w-full">
      {/* LANE HEADER */}

      <LaneHeader
        badge={{
          ...lane.badge,
          label: lane.title,
        }}
        uid={lane.uid}
      />

      {/* ITR */}
      {lane.tasks.map((task) => (
        <DraggableTask key={task.uid} task={task} laneId={lane.uid} />
      ))}
    </div>
  );
};

export { Lane };
export type { LaneProps, LaneType };
