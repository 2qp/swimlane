import { Ellipsis } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type TaskMenuProps = {};

import type { JSX } from "react";

type TaskMenuType = (props: TaskMenuProps) => JSX.Element;

const TaskMenu: TaskMenuType = () => {
  //
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="data-[state=open]:bg-muted flex size-[14px] text-[#B1B5C3]"
          size="icon"
        >
          <Ellipsis />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { TaskMenu };
export type { TaskMenuProps, TaskMenuType };
