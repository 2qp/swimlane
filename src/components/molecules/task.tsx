import { Avatars } from "../atoms/avatars";
import { Separator } from "../ui/separator";
import { PriorityCard } from "./priority-card";
import { TaskFooter } from "./task-footer";
import { TaskImage } from "./task-image";
import { TaskMenu } from "./task-menu";

import type { Task as TaskItem } from "@/types/task";
import type { JSX, Ref } from "react";

type TaskProps = {
  task: TaskItem;
  ref?: Ref<HTMLDivElement>;
};

type TaskType = (props: TaskProps) => JSX.Element;

const Task: TaskType = ({ task, ref }) => {
  //
  return (
    <div
      draggable
      ref={ref}
      className="skew-x-0 gap-[14px]  h-fit bg-white w-full h-full rounded-[12px] px-[12px] py-[7px] flex flex-col "
    >
      {/*  */}

      <div className="flex-1">
        {/*  */}
        <div className="flex justify-between">
          <div className="gap-[8px] flex items-center ">
            <div className="w-[8px] h-[8px] bg-green-500 rounded-[2px] " />
            <p className="text-custom-regular ">{task.label}</p>
          </div>

          <TaskMenu />
        </div>

        <div className="space-y-[10px]">
          <p className="text-custom-medium font-medium">{task.title}</p>

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
