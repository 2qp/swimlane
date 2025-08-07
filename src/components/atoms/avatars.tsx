import Image from "next/image";
import { Icon } from "./icon";

import type { JSX } from "react";
import type { User } from "@/types/task";

type AvatarsProps = {
  users: User[];
};

type AvatarsType = (props: AvatarsProps) => JSX.Element;

const Avatars: AvatarsType = ({ users }) => {
  //
  if (users?.length === 0) return <></>;

  return (
    <div className="flex items-center  -space-x-2 overflow-hidden">
      {users.map(({ avatar, uid, name }) => {
        //

        if (!avatar)
          return (
            <Icon
              key={uid}
              id={"img"}
              alt=""
              className="bg-[#353945] size-[20px] rounded-full p-[5.83px]"
            />
          );

        return (
          <Image
            key={uid}
            src={avatar}
            alt={name || ""}
            width="20"
            height="20"
            className="rounded-full border "
          />
        );
      })}
    </div>
  );
};

export { Avatars };
export type { AvatarsProps, AvatarsType };
