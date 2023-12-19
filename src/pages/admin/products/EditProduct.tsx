import React, { useState } from "react";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { Button } from "../../../components/Button";
import clsx from "clsx";
import BaseInfoProduct from "./component/BaseInfoProduct";
import SpecialProduct from "./component/SpecialProduct";
import InfoSupportPr from "./component/InfoSupportPr";

const listBtn = [
  { text: "base_info", type: "base" },
  { text: "special", type: "special" },
  { text: "product_support", type: "support" },
];
const EditProduct = () => {
  const [typeCreate, setTypeCreate] = useState<string>("base");
  return (
    <div>
      <TitleAdminPage text="list_pr" />
      <div className="border-b flex items-center my-8">
        {listBtn.map((btn, indexBtn) => {
          return (
            <Button
              key={indexBtn}
              color={btn.type === typeCreate ? "primary" : "empty"}
              text={btn.text}
              className={clsx("px-6 py-3 !font-medium !rounded-[4px] !w-fit", {
                "!border-transparent !text-defaultText": btn.type != typeCreate,
              })}
              onClick={() => setTypeCreate(btn.type)}
            />
          );
        })}
      </div>
      <div>
        {typeCreate === "base" && <BaseInfoProduct />}
        {typeCreate === "special" && <SpecialProduct />}
        {typeCreate === "support" && <InfoSupportPr />}
      </div>
    </div>
  );
};

export default EditProduct;
