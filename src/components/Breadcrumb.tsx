import React, { memo, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import IcHouse from "../assets/icons/IcHouse";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { publicRoutes } from "../utils/routers";

interface Props {
  listBreads: { name: string; path: string }[];
}
const Breadcrumb = memo(({ listBreads }: Props) => {
  const [listBreadcrums, setListBreadcrums] = useState<
    { name: string; path: string }[]
  >([]);
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    const locationArr = pathName.split("/");
    const newPaths = locationArr.map((item, index) => {
      const plPath = publicRoutes.filter((plItem) =>
        plItem.path.includes(`/${item}`)
      );
      const plItem = plPath[0] ?? { name: "Chi tiết", path: pathName };
      return {
        name: plItem.name,
        path: plItem.path,
      };
    });

    setListBreadcrums(newPaths);
  }, [location]);
  const { t } = useTranslation();
  return (
    <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5 bg-whiteFAFAFA flex flex-wrap items-center gap-4 py-4">
      {listBreadcrums.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className={clsx("flex gap-3 pr-4 text-base text-main ", {
              "border-r-2  border-r-gray01 !text-gray01 ":
                index + 1 < listBreadcrums.length,
            })}
          >
            {index === 0 && <IcHouse />}
            {t(item.name)}
          </Link>
        );
      })}
    </div>
  );
});

export default Breadcrumb;
