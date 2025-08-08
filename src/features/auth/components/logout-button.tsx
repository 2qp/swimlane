import { IconPipe } from "@/components/icons/icon-pipe";
import { Button } from "@/components/ui/button";

import type { JSX } from "react";

type LogOutButtonProps = {};

type LogOutButtonType = (props: LogOutButtonProps) => JSX.Element;

const LogOutButton: LogOutButtonType = () => {
  // -__-

  return (
    <Button className="bg-neautral-3 text-white max-w-[240px]" variant="ghost" size="xl">
      <IconPipe color="" iconName="logout" />
      {"Logout"}
    </Button>
  );
};

export { LogOutButton };
export type { LogOutButtonProps, LogOutButtonType };
