import { Button } from "../ui/button";
import { Icon } from "./icon";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps, JSX } from "react";
import type { buttonVariants } from "../ui/button";
import type { IconProps } from "./icon";

type TaskFooterButtonProps = {
  button: ComponentProps<"button"> & VariantProps<typeof buttonVariants>;
  icon: IconProps;
  label?: string;
};

type TaskFooterButtonType = (props: TaskFooterButtonProps) => JSX.Element;

const TaskFooterButton: TaskFooterButtonType = ({ button, icon, label }) => {
  //
  return (
    <div className="">
      <Button size="sm" className="px-0.5" {...button}>
        <Icon {...icon} className="size-[16px]" />
        <p className="text-custom-medium text-neutral-4">{label}</p>
      </Button>
    </div>
  );
};

export { TaskFooterButton };
export type { TaskFooterButtonProps, TaskFooterButtonType };
