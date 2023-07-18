"use client";

import { User } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { UserAvatar } from "./UserAvatar";

type UserAccountNavProps = {
  user: Pick<User, "name" | "image" | "email">;
};

export const UserAccountNav = ({ user }: UserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
