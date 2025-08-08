import { Avatars } from "../atoms/avatars";
import { Separator } from "../ui/separator";
import { PriorityCard } from "./priority-card";
import { TaskFooter } from "./task-footer";
import { TaskImage } from "./task-image";
import { TaskMenu } from "./task-menu";

import type { Task as TaskItem } from "@/types/task";
import type { JSX } from "react";

type TaskProps = {
  task: TaskItem;
};

type TaskType = (props: TaskProps) => JSX.Element;

const Task: TaskType = ({ task }) => {
  //
  return (
    <div className="max-w-[260px] max-h-[226px] bg-white w-[260px] h-full rounded-[12px] px-[12px] py-[7px] flex flex-col ">
      {/*  */}

      <div className="flex-1">
        {/*  */}
        <div className="flex justify-between">
          <div className="gap-[8px] flex items-center ">
            <div className="w-[8px] h-[8px] bg-green-500 rounded-[2px] " />
            <p className="text-custom-regular ">{"Design"}</p>
          </div>

          <TaskMenu />
        </div>

        <div className="space-y-[10px]">
          <p className="text-custom-medium font-medium">{"User Interview"}</p>

          <div className="flex gap-[6px]">
            <Avatars users={task?.users || []} />

            <PriorityCard priority="low" />
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <TaskImage src={task.image} />
      </div>

      {/* FOOTER */}
      <div>
        <Separator />
        <TaskFooter items={task.footerItems} />
      </div>
    </div>
  );
};

export { Task };
export type { TaskProps, TaskType };
