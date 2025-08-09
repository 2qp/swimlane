import Image from "next/image";
import { Icon } from "../atoms/icon";

import type { JSX } from "react";

type TaskImageProps = {
  src?: string;
};

type TaskImageType = (props: TaskImageProps) => JSX.Element;

const TaskImage: TaskImageType = ({ src }) => {
  //
  if (!src)
    return (
      <div className="bg-neautral-3 h-[90px] rounded-[4px] items-center justify-center flex">
        <Icon id="img" className="size-[14px]" alt={""} />{" "}
      </div>
    );

  return (
    <Image
      src={src}
      width={234}
      height={90}
      className="bg-neautral-3 rounded-[4px]"
      alt={""}
    />
  );
};

export { TaskImage };
export type { TaskImageProps, TaskImageType };
