import Image from "next/image";

import type { JSX } from "react";

type IconProps = {
  id: string;
  alt: string;
  className?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
};

type IconType = (props: IconProps) => JSX.Element;

const Icon: IconType = ({ id, alt, height = "20", width = "20", ...rest }) => {
  //

  return (
    <Image
      src={`/icons/${id}.svg`}
      alt={alt}
      width={width}
      height={height}
      className="size-[20px]"
      {...rest}
    />
  );
};

export { Icon };
export type { IconProps, IconType };
