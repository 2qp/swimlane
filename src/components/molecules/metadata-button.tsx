import { Icon } from "../atoms/icon";
import { Button } from "../ui/button";

import type { Metadata } from "@/types/task";
import type { JSX } from "react";

type MetadataButtonProps = {} & Metadata;

type MetadataButtonType = (props: MetadataButtonProps) => JSX.Element;

const MetadataButton: MetadataButtonType = ({ icon, label, type }) => {
  //

  return (
    <Button variant="ghost" size="sm">
      <Icon alt={icon} id={icon} className="size-[16px]" />
      <p>{label}</p>
    </Button>
  );
};

export { MetadataButton };
export type { MetadataButtonProps, MetadataButtonType };
