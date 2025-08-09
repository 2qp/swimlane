import type { LaneBadgeProps } from "@/components/atoms/lane-badge";
import type { Task } from "./task";

type Lane = {
  uid: string;
  title: string;
  tasks: Task[];
  badge?: Omit<LaneBadgeProps, "label">;
};

export type { Lane };
