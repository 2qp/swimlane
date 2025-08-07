import Image from "next/image";

import type { JSX } from "react";

type IconProps = {
  id: string;
  alt: string;
  className?: string;
};

type IconType = (props: IconProps) => JSX.Element;

const Icon: IconType = ({ id, alt, ...rest }) => {
  //

  return (
    <Image
      src={`/icons/${id}.svg`}
      alt={alt}
      width="20"
      height="20"
      {...rest}
    />
  );
};

export { Icon };
export type { IconProps, IconType };
