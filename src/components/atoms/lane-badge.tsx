import { COLOR_MAP } from "@/constants/colors";
import { Badge } from "../ui/badge";

import type { VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import type { badgeVariants } from "../ui/badge";

type BadgeColor = keyof typeof COLOR_MAP | (string & {});

type LaneBadgeProps = {
  label?: string;
  color?: BadgeColor;
  variant?: VariantProps<typeof badgeVariants>["variant"];
};

type LaneBadgeType = (props: LaneBadgeProps) => JSX.Element;

const LaneBadge: LaneBadgeType = ({ label, color, variant = "default" }) => {
  //

  const classes =
    COLOR_MAP[(color as keyof typeof COLOR_MAP) || "default"] ||
    COLOR_MAP["default"];

  return (
    <Badge
      className={`px-6 py-1 font-medium text-custom-medium rounded-[46px] ${classes}`}
      variant={variant}
    >
      {label}
    </Badge>
  );

  return <></>;
};

export { LaneBadge };
export type { LaneBadgeProps, LaneBadgeType };
