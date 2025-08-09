import type { Lane } from "@/types/lane";

type TaskFilterParams = {
  lanes: Lane[];
  query?: string;
};

type TaskFilterType = (params: TaskFilterParams) => Lane[];

const taskFilter: TaskFilterType = ({ lanes, query }) => {
  //

  console.log("runs", query);

  if (!lanes) return [];
  if (!query) return lanes;

  console.log("runs");

  const result = lanes.map((lane) => ({
    ...lane,
    tasks: lane.tasks.filter(
      (task) =>
        task.label.toLowerCase().includes(query) ||
        task.title.toLowerCase().includes(query)
    ),
  }));

  console.log(JSON.stringify(result, null, 2));

  return result;

  //
};

export { taskFilter };
export type { TaskFilterParams, TaskFilterType };
