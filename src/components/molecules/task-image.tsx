import Image from "next/image";
import { Icon } from "../atoms/icon";

import type { JSX } from "react";

type TaskImageProps = {
  src?: string | null;
};

type TaskImageType = (props: TaskImageProps) => JSX.Element | null;

const TaskImage: TaskImageType = ({ src }) => {
  //
  // just to show placeholder
  if (src === null)
    return (
      <div className="bg-neautral-3 h-[90px] rounded-[4px] items-center justify-center flex">
        <Icon id="img" className="size-[14px]" alt={""} />
      </div>
    );

  if (!src) return null;

  return (
    <Image
      src={src}
      width={0}
      height={0}
      className="bg-neautral-3 rounded-[4px] w-full h-auto max-h-[90px] items-center justify-center flex"
      alt={""}
    />
  );
};

export { TaskImage };
export type { TaskImageProps, TaskImageType };
