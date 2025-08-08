import { TaskFooterButton } from "../atoms/task-footer-button";

import type { JSX } from "react";

type TaskFooterItem = "link" | "remark" | "due" | "metadata";

type TaskFooterProps = {
  items?: TaskFooterItem[];
};

type TaskFooterType = (props: TaskFooterProps) => JSX.Element;

const TaskFooter: TaskFooterType = ({ items = ["link"] }) => {
  //

  const renderItem = (item: TaskFooterItem) => {
    switch (item) {
      case "link":
        return (
          <TaskFooterButton
            key={"link"}
            button={{ variant: "ghost" }}
            icon={{ alt: "", id: "link" }}
            label="2"
          />
        );
      case "remark":
        return (
          <TaskFooterButton
            key={"remark"}
            button={{ variant: "ghost" }}
            icon={{ alt: "", id: "remark" }}
            label="2"
          />
        );
      case "due":
        return (
          <TaskFooterButton
            key={"due"}
            button={{ variant: "link" }}
            icon={{ alt: "", id: "due" }}
            label="Due: Tomorrow"
          />
        );
      // You can add more cases here for other TaskFooterItem types
      default:
        return null;
    }
  };

  return (
    <div className="gap-[24px] flex text-neutral-4">
      {items.map((item) => renderItem(item))}
    </div>
  );
};

export { TaskFooter };
export type { TaskFooterItem, TaskFooterProps, TaskFooterType };
