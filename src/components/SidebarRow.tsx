import React from "react";
import Image from "next/image";

type props = {
  src?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
};

export const SidebarRow: React.VFC<props> = ({ src, Icon, title }: props) => {
  return (
    <div className="flex flex-row items-center p-4 space-x-2 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          alt=""
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-semibold">{title}</p>
    </div>
  );
};
