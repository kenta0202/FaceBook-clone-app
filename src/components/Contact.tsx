/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Image from "next/image";
export const Contact = ({ src, name }) => {
  return (
    <div className="flex relative items-center p-2 mb-2 space-x-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        alt=""
      />
      <p className="">{name}</p>
      <div className="absolute bottom-2 left-7 w-3 h-3 bg-green-400 rounded-full"></div>
    </div>
  );
};
