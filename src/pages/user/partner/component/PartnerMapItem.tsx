import React, { memo } from "react";
import { Companylogo } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface Props {
  className?: string;
  onChangeLinkMap: () => void;
  item: {
    imageLink: string;
    linkMap: string;
    companyName: string;
    address: string;
    taxCode: string;
    personContact: string;
    hotline: string;
    email: string;
  };
}
const PartnerMapItem = memo(
  ({ item, className = "", onChangeLinkMap }: Props) => {
    const { t } = useTranslation();
    return (
      <div
        className={clsx(
          "w-full hover:bg-whiteFAFAFA py-6 px-4 flex flex-col gap-2 text-defaultText ",
          className
        )}
        onClick={() => onChangeLinkMap()}
      >
        <img
          src={item?.imageLink ?? Companylogo}
          alt=""
          className="w-[120px] h-10 mb-[6px]"
        />
        <p className="font-medium text-lg">{item.companyName}</p>
        <p>
          {t("address")}: {item.address}
        </p>
        <p>
          {t("tax_code")}: {item.taxCode}
        </p>
        <p>
          {t("person_contact")}: {item.personContact}
        </p>
        <p>
          {t("phone_number")}:{" "}
          <span className="text-danger"> {item.hotline}</span>
        </p>
        <p>
          {t("email")}: {item.email}
        </p>
      </div>
    );
  }
);

export default PartnerMapItem;
