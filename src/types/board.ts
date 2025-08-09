import type { BadgeProps } from "@/components/atoms/badge";
import type { Lane } from "./lane";
import type { User } from "./task";

type Board = {
  uid: string;
  name: string;
  label?: string;

  lanes: Lane[];
  users?: User[];

  updated?: string;
  status?: string;
  badge?: Omit<BadgeProps, "label">;
};

export type { Board };
