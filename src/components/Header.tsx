/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HeaderIcon } from "./HeaderIcon";
import { useSession, signOut } from "next-auth/client";
import Image from "next/image";

export const Header = () => {
  const [session] = useSession();
  return (
    <div className="flex sticky top-0 z-50 items-center p-2 md:p-5 bg-white shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />
        <div className="flex p-2 ml-2 bg-gray-100 rounded-full">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex-shrink items-center ml-2 placeholder-gray-500 bg-transparent outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-2 md:space-x-6">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className=" flex items-center sm:space-x-2">
        {/* Profile pic */}
        <div onClick={() => signOut()}>
          <Image
            alt=""
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width="40"
            height="40"
            layout="fixed"
          />
        </div>
        <p className="pr-3 font-semibold whitespace-nowrap">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};
