import type { Task } from "./task";

type Lane = {
  uid: string;
  title: string;
  tasks: Task[];
};

export type { Lane };
