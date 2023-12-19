import clsx from "clsx";
import React, { memo } from "react";

interface Props {
  item: {
    imageLink: string;
    name: string;
    position?: string;
  };
}
const StaffItem = memo(({ item }: Props) => {
  return (
    <div
      className={clsx(
        "w-full h-auto  flex flex-col gap-10 rounded-[4px] overflow-hidden bg-white"
      )}
    >
      <div className="sc1800:h-[460px] h-300">
        <img
          src={item.imageLink}
          alt=""
          className="w-full h-full object-cover rounded-t-[4px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-fit">
          <p className="text-disabled font-medium uppercase">{item?.name}</p>
          <div className="w-3/5 h-[1px] bg-defaultText my-2"></div>
        </div>
        <p className="text-xl text-main">{item?.position}</p>
      </div>
    </div>
  );
});

export default StaffItem;
