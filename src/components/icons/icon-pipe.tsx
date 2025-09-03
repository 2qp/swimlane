import { iconMap } from ".";

import type { JSX } from "react";
import type { IconName } from ".";

type IconPipeProps = {
  iconName: IconName | (string & {});
  color: string;
};

type IconPipeType = (props: IconPipeProps) => JSX.Element | null;

const IconPipe: IconPipeType = ({ iconName, color }) => {
  //
  const IconComponent = iconMap[iconName as keyof typeof iconMap];

  if (!IconComponent) return null; // fallback

  return (
    <div>
      <IconComponent className={`w-6 h-6 fill-current ${color}`} />
    </div>
  );
};

export { IconPipe };
export type { IconPipeProps, IconPipeType };
