import React from "react";

type Props = {
  active?: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const HeaderIcon: React.VFC<Props> = ({ Icon, active }: Props) => {
  return (
    <div className="group flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 cursor-pointer">
      <Icon
        className={`h-5 text-center mx-auto group-hover:text-blue-500 sm:h-7 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};
