import clsx from "clsx";
import React, { memo } from "react";
import { HistoryCard } from "../../../../assets/images";
import StageHistoryBox from "./StageHistoryBox";

interface Props {
  item: {
    stage: string;
    title: string;
    descrition: string;
    imageLink: string;
  };
  reverse?: boolean;
  color: "pink" | "blue" | "gray" | "gold";
  className?: string;
}
const HistoryItem = memo(
  ({ item, reverse = false, color = "pink", className }: Props) => {
    return (
      <div
        className={clsx(
          " flex flex-col gap-y-4 mb-16",
          {
            "pl-[90px] items-start": !reverse,
            "pr-[90px] items-end": reverse,
          },
          className
        )}
      >
        <StageHistoryBox reverse={reverse} text={item.stage} color={color} />
        <p className="text-xl font-medium">{item.title}</p>
        <p
          className={clsx(" break-words", {
            "text-left": !reverse,
            "text-right": reverse,
          })}
        >
          {item.descrition}
        </p>
        <img
          src={HistoryCard}
          alt=""
          className="w-[424px] h-[270px] rounded-[4px]"
        />
      </div>
    );
  }
);

export default HistoryItem;
