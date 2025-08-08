import Image from "next/image";
import { useMemo } from "react";
import { Icon } from "./icon";

import type { User } from "@/types/task";
import type { JSX } from "react";

type AvatarsProps = {
  users: User[];
};

type AvatarsType = (props: AvatarsProps) => JSX.Element;

const Avatars: AvatarsType = ({ users }) => {
  //

  const limit = 3;

  const length = useMemo(() => users.length, [users]);

  const limitedUsers = useMemo(() => users.slice(0, limit), [users]);

  if (length === 0) return <></>;

  return (
    <div className="flex items-center  -space-x-2 overflow-hidden">
      {limitedUsers.map(({ avatar, uid, name }) => {
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
            className="rounded-full border border-white"
          />
        );
      })}

      {length > limit && (
        <div className="p-[5.83px] text-[9px] font-semibold bg-[#E6E8EC] rounded-full size-[20px] text-center flex justify-center items-center border border-white">
          <p>{"+" + (length - limitedUsers.length)}</p>
        </div>
      )}
    </div>
  );
};

export { Avatars };
export type { AvatarsProps, AvatarsType };
