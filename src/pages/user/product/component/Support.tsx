import React from "react";
import { useTranslation } from "react-i18next";
import IcFile from "../../../../assets/icons/IcFile";

const dataSupport = [
  {
    name: "Hỗ trợ khách hàng và kỹ thuật, Phần mềm/Firmware, Dịch vụ sửa chữa",
  },
  { name: "Đào tạo kỹ thuật cho CommScope" },
];
const Support = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <p className="font-semibold text-40 mb-10">{t("product_support")}</p>
      <div className="pb-10">
        {dataSupport.map((sp, iSp) => {
          return (
            <div
              key={iSp}
              className="flex items-center gap-2 mb-5 cursor-pointer"
            >
              <IcFile />
              <p className="text-main">{sp.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Support;
