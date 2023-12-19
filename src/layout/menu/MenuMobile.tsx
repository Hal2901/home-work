import React from "react";
import { publicPath, publicRoutes } from "../../utils/routers";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageBox from "../components/LanguageBox";
import UserBox from "../components/UserBox";
import colors from "../../common/colors";
interface Props {
  handleClick: () => void;
}

const MenuMobile = ({ handleClick }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="sm:w-1/3 w-4/5 h-screen pt-5 pb-100 xl:hidden block bg-white absolute top-[72px] left-0 overflow-y-scroll hidden-scroll shadow-normal">
      <div className="sm:hidden px  -6 flex flex-wrap items-center">
        <LanguageBox />
        <UserBox className="w-124" color={colors.disable_color} />
      </div>
      <div className="flex flex-col ">
        {publicRoutes.map((item, index) => {
          if (item.hidden) return;
          // if (
          //   item.path === "/" ||
          //   item.path === publicPath.contact.index ||
          //   item.path === publicPath.sport.index
          // )
          return (
            <Link
              onClick={handleClick}
              key={index}
              to={item.path}
              className="sc1800:text-white text-defaultText text-base leading-5 font-medium group p-6 hover:bg-hover  relative"
            >
              {t(item.name)}
            </Link>
          );
          // return (
          //   <LinkWrapperMenu
          //     key={index}
          //     item={{
          //       text: item.name,
          //       path: item.path,
          //       typeMenu: item.typeMenu ?? null,
          //     }}
          //   />
          // );
        })}
      </div>
    </div>
  );
};

export default MenuMobile;
