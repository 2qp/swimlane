import { Icon } from "../atoms/icon";

import type { Priority } from "@/types/priority";
import type { JSX } from "react";

type PriorityCardProps = {
  priority: Priority;
};

type PriorityCardType = (props: PriorityCardProps) => JSX.Element;

const PriorityCard: PriorityCardType = ({ priority }) => {
  //
  return (
    <div className="flex gap-[4px] p-[4px] rounded-[5px] max-h-[20px] max-w-[40px] h-full w-full bg-[#F4F5F6]">
      <Icon id="zap" alt="" className="w-[12px] h-[12px]" />
      <p className="text-custom-small text-neutral-500">{priority}</p>
    </div>
  );
};

export { PriorityCard };
export type { PriorityCardProps, PriorityCardType };
