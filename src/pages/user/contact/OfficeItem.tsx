import clsx from "clsx";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  index: number;
  item: {
    nameContact: string;
    part: string;
    position: string;
    phoneNumber: string;
    email: string;
    factory: string;
    address: string;
    phoneContact: string;
  };
}
const OfficeItem = memo(({ index, item }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full p-6 flex flex-col gap-4 min-h-[385px] bg-white rounded-[4px] text-black">
      <div
        className={clsx(
          "rounded-[4px] h-12 px-4  text-white flex items-center text-lg font-semibold",
          {
            "bg-main": index % 2 === 0,
            // "bg-[#9A8143]": index % 3 != 0,
            "bg-[#ED164B]": index % 2 != 0,
          }
        )}
      >
        {t("office")} &nbsp; {index + 1}
      </div>
      <p className="h-5">
        {t("part")} : {item?.nameContact}
      </p>
      <p className="h-5">
        {t("part")} : {item?.part}
      </p>
      <p className="h-5">
        {t("position")} : {item?.position}
      </p>
      <p className="h-5">
        {t("phone_number")} : {item?.phoneNumber}
      </p>
      <p className="h-5">
        {t("email")} : {item?.email}
      </p>
      <p className="h-5">
        {t("factory")} : {item?.factory}
      </p>
      <p className="h-5">
        {t("address")} : {item?.address}
      </p>
      <p className="h-5">
        {t("phone_contact")} : {item?.phoneContact}
      </p>
    </div>
  );
});

export default OfficeItem;
