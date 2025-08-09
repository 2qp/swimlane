import { Badge } from "../ui/badge";

import type { VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import type { badgeVariants } from "../ui/badge";

const badgeColorMap = {
  red: "bg-red-500 text-white",
  green: "bg-green-500 text-white",
  blue: "bg-blue-500 text-white",
  yellow: "bg-yellow-400 text-black",
  gray: "bg-neutral-6",
  // fallback
  default: "bg-gray-300 text-black",
} as const;

type BadgeColor = keyof typeof badgeColorMap | (string & {});

type LaneBadgeProps = {
  label?: string;
  color?: BadgeColor;
  variant?: VariantProps<typeof badgeVariants>["variant"];
};

type LaneBadgeType = (props: LaneBadgeProps) => JSX.Element;

const LaneBadge: LaneBadgeType = ({ label, color, variant = "default" }) => {
  //

  const classes =
    badgeColorMap[(color as keyof typeof badgeColorMap) || "default"] ||
    badgeColorMap["default"];

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
