import React from "react";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { listBreads } from "../../../utils/common";
import TitlePage from "../../../components/TitlePage";
import { useTranslation } from "react-i18next";
import { InputElement } from "../../../components/InputElement";
import { Button } from "../../../components/Button";
import InfoProject from "./component/InfoProject";

const CheckWarrantyCertificate = () => {
  const { t } = useTranslation();
  const handleCheckCertificate = () => {
    console.log("kiểm tra thông tin chứng chỉ bảo hành.");
  };
  const fakeData = {
    a: "Nguyễn Huy Hoàng",
    b: "Lắp đặt sân khấu điện ảnh",
    c: "Hồ Hoàn Kiếm, Hàng Trống, Hoàn Kiếm, Hà Nội, Việt Nam",
    d: " Thầu Hoàn Kiếm 1",
  };
  return (
    <div>
      <Banner typeBanner="GUARANTEE" />
      <Breadcrumb listBreads={listBreads} />
      <div className="px-300 py-88">
        <TitlePage text={"input_number_certificate"} className="!mb-4" />
        <p className="mb-4">{t("input_number_certificate_sub")}</p>
        <div className="flex items-center gap-6 pb-6 border-b border-border">
          <div className="font-semibold">LSCV:</div>
          <InputElement
            placeholder={"-"}
            name={""}
            style={{ width: "100%", textAlign: "center" }}
            className="!w-[140px]"
          />
          <div className="text-defaultText">-</div>
          <InputElement
            placeholder={"-"}
            name={""}
            style={{ width: "100%", textAlign: "center" }}
            className="!w-[140px]"
          />
          <div className="text-defaultText">-</div>
          <InputElement
            placeholder={"-"}
            name={""}
            style={{ width: "100%", textAlign: "center" }}
            className="!w-[140px]"
          />
          <div className="text-defaultText">-</div>
          <Button
            color="primary"
            text="checking"
            className="px-6 py-3 !w-fit !font-medium "
            onClick={handleCheckCertificate}
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">
          <InfoProject name="info_project" typeBox="project" data={fakeData} />
          <InfoProject name="info_project" typeBox="LSI" data={fakeData} />
          <InfoProject
            name="info_project"
            typeBox="distributor"
            data={fakeData}
          />
          <InfoProject name="info_project" typeBox="guaratee" data={fakeData} />
        </div>
      </div>
    </div>
  );
};

export default CheckWarrantyCertificate;
