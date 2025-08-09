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
    <div
      ref={ref}
      className="bg-blue-100 text-blue-800 rounded-md p-3 shadow cursor-grab hover:bg-blue-200 transition"
    >
      <Task task={task} />
    </div>
  );
};

export { DraggableTask };
export type { DraggableTaskProps, DraggableTaskType };
