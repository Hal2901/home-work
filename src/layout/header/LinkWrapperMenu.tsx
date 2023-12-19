import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useMouseover from "../../hooks/useMouseover";
import Menu from "../menu/Menu";

interface Props {
  item: {
    path: string;
    text: string;
    typeMenu:
      | "product"
      | "solution"
      | "resource"
      | "partner"
      | "company"
      | "contact"
      | "sport"
      | null;
    className?: string;
    heigh?: number;
  };
}
const LinkWrapperMenu = memo(({ item }: Props) => {
  const { t } = useTranslation();
  const { ref, hoverShow } = useMouseover();
  return (
    <div
      ref={ref}
      className="text-base leading-5 font-medium py-[26px] relative"
    >
      <Link
        to={item.path}
        ref={ref}
        className="sc1800:text-white text-base leading-5 font-medium"
      >
        {t(item.text)}
      </Link>
      <div className="">{hoverShow && <Menu typeMenu={item.typeMenu} />}</div>
    </div>
  );
});

export default LinkWrapperMenu;
