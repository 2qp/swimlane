import { IconPipe } from "../icons/icon-pipe";
import { Button } from "../ui/button";

import type { Metadata } from "@/types/task";
import type { JSX } from "react";

type MetadataButtonProps = {} & Metadata;

type MetadataButtonType = (props: MetadataButtonProps) => JSX.Element;

const TYPE_MAP = {
  primary: "text-primary",
  warning: "text-primary-red",
};

const MetadataButton: MetadataButtonType = ({ icon, label, type }) => {
  //

  return (
    <Button variant="ghost" size="sm" className="text-custom-medium">
      <IconPipe
        iconName={icon}
        color={`size-[16px] w-[16px] h-[16px] ${TYPE_MAP[type]}`}
      />
      <p className={TYPE_MAP[type]}>{label}</p>
    </Button>
  );
};

export { MetadataButton };
export type { MetadataButtonProps, MetadataButtonType };
