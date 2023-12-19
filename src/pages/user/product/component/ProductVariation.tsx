import { useState } from "react";
import { useTranslation } from "react-i18next";
import { productCard } from "../../../../assets/images";
import DropdownSelect from "../../../../components/DropdownSelect";
import { Pagination } from "../../../../components/Paginnation";
import TableProductVariation, { DataTable } from "./TableProductVariation";

const dataFake = [
  {
    info: {
      imageLink: productCard,
      title: "700211923 | 1071E SLT C6 4/23 U/UTP R1000",
      description:
        " Cáp U/UTP loại 6 đã được xác minh của GigaSPEED XL® 1071E ETL, không có ống thông gió, áo khoác m",
    },
    availability: "Châu Á | Úc/New Zealand | Mỹ Latinh | Bắc Mỹ",
    category: "SYSTIMAX®",
    type: "Cáp xoắn đôi",
    enviroment: "Không đầy đủ",
    typeCap: "U/UTP (không được che chắn)",
  },
];
const ProductVariation = () => {
  const { t } = useTranslation();
  const [curentPage, setCurrentPage] = useState<number>(1);
  const [dataTable, setDataTable] = useState<DataTable[]>([]);

  const handleDownload = () => {
    console.log("download");
  };
  const handlePlus = () => {
    console.log("download");
  };
  return (
    <div className="w-full mb-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-40 mb-2">{t("product_variation")}</p>
          <p className="">
            Định cấu hình và hiển thị các biến thể sản phẩm của 1071E bằng cách
            chọn các tùy chọn
          </p>
        </div>
        <div className="flex items-center gap-6 ">
          <div>
            <p className="font-medium mb-2">Loại cáp</p>
            <DropdownSelect name="U/UTP" />
          </div>
          <div>
            <p className="font-medium mb-2">Màu sắc</p>
            <DropdownSelect name="Chọn màu sắc" />
          </div>
          <div>
            <p className="font-medium mb-2">Bao bì</p>
            <DropdownSelect name="Chọn loại bao bì" />
          </div>
        </div>
      </div>

      <div className=" my-9 overflow-y-scroll">
        <TableProductVariation
          data={dataFake}
          handleDownload={handleDownload}
          handlePlus={handlePlus}
        />
      </div>
      <div className="flex justify-end">
        <Pagination
          currentPage={curentPage}
          totalPages={6}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductVariation;
