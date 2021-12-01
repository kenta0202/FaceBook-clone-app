/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

type Props = {
  name: string;
  message: string;
  email: string;
  postImage: string;
  image: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timestamp: any;
};

export function Post({ name, message, postImage, image, timestamp }: Props) {
  return (
    <div className="flex flex-col">
      <div className="pt-5 mt-5 bg-white rounded-t-2xl shadow-sm">
        <div className="flex flex-row items-center pl-5 space-x-2">
          <Image
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div className="flex flex-col">
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate() as string).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4 pl-5">{message}</p>
        {postImage && (
          <div className="relative h-56 md:h-96 bg-white">
            <Image
              src={postImage}
              alt=""
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        )}

        {/* Footer of post */}
        <div className="flex flex-row justify-between items-center text-gray-400 bg-white rounded-b-2xl border-t shadow-md">
          <div className="rounded-none inputIcon rouned-bl-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
          </div>
          <div className="rounded-none inputIcon">
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="rounded-none inputIcon rouned-br-2xl">
            <ShareIcon className="h-4" />
            <p className="text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}
