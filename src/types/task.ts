import type { TaskFooterItem } from "@/components/molecules/task-footer";
import type { Priority } from "./priority";

type Remark = {};

type Action = {};

type User = {
  uid: string;
  name?: string;
  avatar?: string | null;
};

type Metadata = {
  type: "primary" | "warning";
  icon: "notify" | "warn";
  label?: string;
};

type Task = {
  uid: string;
  title: string;

  label: string;
  color: string;

  image: string;

  due: string;

  priority: Priority;

  users?: User[];
  remarks?: Remark[];
  action?: Action;
  metadata?: Metadata;
  footerItems?: TaskFooterItem[];
};

export type { Metadata, Task, User };
