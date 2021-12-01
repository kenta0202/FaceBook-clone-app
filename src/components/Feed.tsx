/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { InputBox } from "./InputBox";
import { Posts } from "./Posts";
import { Stories } from "./Stories";

export const Feed = ({ posts }) => {
  return (
    <div className="flex flex-grow h-screen pb-44 pt-6 mr-3 xl:mr-40 overflow-y-auto scrollbar-hide ">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
};
