import { COLOR_MAP } from "@/constants/colors";
import { cn } from "@/lib/utils";
import { Badge as BadgeComponent } from "../ui/badge";

import type { VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import type { badgeVariants } from "../ui/badge";

type BadgeColor = keyof typeof COLOR_MAP | (string & {});

type BadgeProps = {
  label?: string;
  color?: BadgeColor;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  className?: string;
};

type BadgeType = (props: BadgeProps) => JSX.Element;

const Badge: BadgeType = ({ label, color, variant = "default", className }) => {
  //

  const classes =
    COLOR_MAP[(color as keyof typeof COLOR_MAP) || "default"] ||
    COLOR_MAP["default"];

  return (
    <BadgeComponent
      className={cn(
        "px-6 py-1 font-medium text-custom-medium rounded-[5px] h-[20px] ",
        classes,
        className
      )}
      variant={variant}
    >
      {label}
    </BadgeComponent>
  );

  return <></>;
};

export { Badge };
export type { BadgeProps, BadgeType };
