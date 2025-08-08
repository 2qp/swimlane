import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import type { JSX } from "react";

const avatarStyles = {
  header: {
    avatar: "size-[30px]",
    img: "size-[12.5px]",
  },

  task: {
    avatar: "",
    img: "",
  },

  general: {
    avatar: "",
    img: "",
  },

  switcher: {
    avatar: "size-[44px]",
    img: "size-[13.33px]",
  },
} as const;

type CustomAvatarProps = {
  src: string;
  type: keyof typeof avatarStyles;
};

type CustomAvatarType = (props: CustomAvatarProps) => JSX.Element;

const CustomAvatar: CustomAvatarType = ({ src, type }) => {
  //
  return (
    <Avatar className={avatarStyles[type].avatar}>
      <AvatarImage src={src} />
      <AvatarFallback className="bg-neautral-3">
        <Image
          src={`/icons/img.svg`}
          alt={""}
          width={12.5}
          height={12.5}
          className={avatarStyles[type].img}
        />
      </AvatarFallback>
    </Avatar>
  );
};

export { CustomAvatar };
export type { CustomAvatarProps, CustomAvatarType };
