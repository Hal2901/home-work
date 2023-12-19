import React, { memo, useState } from "react";
import { listNameTbSpecial } from "../../../../utils/common";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface Props {
  item: any;
}
const SpecialItem = memo(({ item }: Props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="w-full mb-10">
      <p className="text-2xl font-semibold border-l-4 border-l-main pl-4 mb-6 ">
        {item?.title}
      </p>

      <div
        className="grid grid-cols-3 border-l border-active"
        onClick={() => setShow(!show)}
      >
        {listNameTbSpecial.map((name, index) => {
          return (
            <div
              key={index}
              className="bg-active p-4 text-white font-medium border-b border-r h-14 border-border"
            >
              {t(name)}
            </div>
          );
        })}
      </div>
      <div
        className=" overflow-hidden h-0 duration-500 ease-in-out"
        style={{ height: show ? item?.attributes?.length * 56 : 0 }}
      >
        {item?.attributes.map((attr: any, indexAttr: number) => {
          return (
            <div
              key={indexAttr}
              className={clsx("grid grid-cols-3 border-l border-border")}
            >
              <div className="p-4 text-sm min-h-[56px] border-b border-r  border-border">
                {attr?.categoryName}
              </div>
              <div className="p-4 text-sm min-h-[56px] border-b border-r  border-border">
                {attr?.description}
              </div>
              <div className="p-4 text-sm min-h-[56px] border-b border-r  border-border">
                {attr?.columnName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SpecialItem;
