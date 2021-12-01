import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  src: string;
  profile: string;
};
export const StoryCard: React.VFC<Props> = ({ name, src, profile }: Props) => {
  return (
    <div className="relative p-3 w-14 md:w-20 lg:w-32 h-14 md:h-20 lg:h-56 transition duration-100 ease-in hover:animate-pulse transform hover:scale-105 cursor-pointer">
      <Image
        alt=""
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
        // リサイズしたい
        // layout="fill"ではなく、width,heightを指定。ただこれだと、画像が引き伸ばされてしまうので、objectFit="cover"を追加
        className="absolute top-10 z-50 rounded-full opacity-0 lg:opacity-100"
      />
      <Image
        alt=""
        src={src}
        layout="fill"
        className="object-cover rounded-full lg:rounded-3xl brightness-75"
      />
      <p className="absolute bottom-4 w-5/6 text-sm font-bold text-white truncate opacity-0 lg:opacity-100 ...">
        {name}
      </p>
    </div>
  );
};
