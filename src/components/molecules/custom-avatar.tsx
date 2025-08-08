import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import type { JSX } from "react";

type AvatarStyles = {
  header: {
    avatar: string;
    img: string;
  };

  task: {
    avatar: string;
    img: string;
  };

  general: {
    avatar: string;
    img: string;
  };
};

type CustomAvatarProps = {
  src: string;
  type: keyof AvatarStyles;
};

type CustomAvatarType = (props: CustomAvatarProps) => JSX.Element;

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
};

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
