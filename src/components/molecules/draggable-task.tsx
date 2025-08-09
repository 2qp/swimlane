import { useDraggable } from "@/hooks/use-draggable";
import { useCallback } from "react";
import { Task } from "./task";

import type { Task as TaskItem } from "@/types/task";
import type { JSX } from "react";

type DraggableTaskProps = {
  laneId: string;
  task: TaskItem;
};

type DraggableTaskType = (props: DraggableTaskProps) => JSX.Element;

const DraggableTask: DraggableTaskType = ({ task, laneId }) => {
  //

  const getData = useCallback(
    () => ({ cardId: task.uid, laneId }),
    [laneId, task.uid]
  );

  const ref = useDraggable<HTMLDivElement>({
    getData: getData,
  });

  return (
    <div className="w-full px-[14px] flex justify-center ">
      <div className="w-full shadow cursor-grab hover:shadow-2xl transition overflow-hidden rounded-[12px]">
        <Task ref={ref} task={task} />
      </div>
    </div>
  );
};

export { DraggableTask };
export type { DraggableTaskProps, DraggableTaskType };
