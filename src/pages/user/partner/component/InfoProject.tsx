import clsx from "clsx";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  typeBox: "project" | "LSI" | "guaratee" | "distributor";
  name: string;
  data: any;
}
const InfoProject = memo(({ name, typeBox, data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full border border-border rounded-[4px] overflow-hidden">
      <div
        className={clsx("h-14 flex items-center gap-2 px-6", {
          "bg-main": typeBox === "project",
          "bg-[#ED164B]": typeBox === "LSI",
          "bg-[#9A8143]": typeBox === "distributor",
          "bg-[#90979D]": typeBox === "guaratee",
        })}
      >
        <div className="w-3 h-3 rounded-1/2 bg-white"></div>
        <p className="text-lg font-bold text-white">{t(name)}</p>
      </div>
      <div
        className={clsx("px-[45px] py-6", {
          "bg-bgProject": typeBox === "project",
          "bg-bgPinkOpacity": typeBox === "LSI",
          "bg-bgDistributor": typeBox === "distributor",
          "bg-bgGuaratee": typeBox === "guaratee",
        })}
      >
        <ul className="flex flex-col gap-6 list-disc">
          {Object.entries(data).map((entri: any, index: number) => {
            return (
              <li key={index}>
                {entri[0]}: <span className="font-medium">{entri[1]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default InfoProject;
