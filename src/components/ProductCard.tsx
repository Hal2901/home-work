import React, { ReactNode, useMemo } from "react";
import { productCard } from "../assets/images";
import { useTranslation } from "react-i18next";
import IcDownload from "../assets/icons/IcDowload";
import IcPlusCircle from "../assets/icons/IcPlusCircle";
import { productType } from "../types/productType";

type BoxType = {
  props: {
    text: string;
    icon: ReactNode;
    func: () => void;
  };
};

interface Props {
  item?: productType;
  onClickPr: () => void;
}
const ProductCard = ({ item, onClickPr }: Props) => {
  const { t } = useTranslation();
  const handleDownload = () => {
    console.log("a");
  };
  const handleAddFavorite = () => {
    console.log("favorite");
  };
  const items = [
    {
      text: "file_document",
      icon: <IcDownload />,
      func: handleDownload,
    },
    {
      text: "list_favorite",
      icon: <IcPlusCircle />,
      func: handleAddFavorite,
    },
  ];

  const BoxButtonHandle = useMemo(
    () =>
      ({ props }: BoxType) => {
        return (
          <div className="h-12 border border-border rounded-10 flex flex-wrap justify-between overflow-hidden">
            <div className="text-base px-6 flex items-center justify-center h-full">
              {t(props.text)}
            </div>
            <div
              onClick={props.func}
              className="cursor-pointer w-12 h-full rounded-r-10 bg-main flex items-center justify-center"
            >
              {props.icon}
            </div>
          </div>
        );
      },
    []
  );
  return (
    <div className="min-h-[490px] h-auto bg-white w-full p-6 flex flex-col gap-6 shadow-normal rounded-[4px]">
      <div className="w-full h-[145px]" onClick={onClickPr}>
        <img
          src={productCard}
          alt=""
          className="object-contain w-full cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base text-main font-bold break-words line-clamp-2">
          {item?.title ?? "284765-000 | GELSNAP-C-18/5-180-INT"}
        </p>
        <p className="text-base text-defaultText line-clamp-3 min-h-[60px]">
          {item?.title ??
            " Nắp đồng GELSNAP, không chịu áp lực, bịt kín bằng gel, đối đầu/trong đường nối, cho tối đa 30 cặp mối nối"}
        </p>
        <p className="text-base text-defaultText font-medium">
          {t("suggest_price")}: &nbsp;{" "}
          <span className="text-danger">{item?.price ?? "150.000"} VND</span>
        </p>
        {items.map((item, index) => {
          return <BoxButtonHandle props={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
