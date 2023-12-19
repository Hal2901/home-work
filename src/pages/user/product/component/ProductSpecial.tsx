import React from "react";
import { useTranslation } from "react-i18next";
import { dataProductSpecialFake } from "../../../../utils/common";
import SpecialItem from "./SpecialItem";

const ProductSpecial = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <p className="font-semibold text-40 mb-10">{t("special")}</p>
      <div>
        {dataProductSpecialFake.map((special, index) => {
          return <SpecialItem key={index} item={special} />;
        })}
      </div>
    </div>
  );
};

export default ProductSpecial;
