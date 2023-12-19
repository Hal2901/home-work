import { useContext } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import IcDelete from "../../../../assets/icons/IcDelete";
import IcEdit from "../../../../assets/icons/IcEdit";
import { categoriesTh } from "../../../../utils/common";
import { ModalContext } from "../../../../context";
import { ConfirmModal } from "../../../../context/ConfirmModal";
import EditCategoryForm from "./EditCategoryForm";
import { CategoryParent } from "../../../../types/categoriesType";

interface Props {
  data: CategoryParent[];
  onReload: () => void;
}
const CategoriesTable = ({ data, onReload }: Props) => {
  const { t } = useTranslation();
  const { setModal } = useContext(ModalContext);
  const renderCate3 = (data: CategoryParent) => {
    const listSub = [];
    const length = data?.children?.length;
    for (let i = 0; i < length; i++) {
      const a = data?.children[i]?.children;
      listSub.push(
        <div
          key={i}
          className={clsx(" h-12 flex items-center px-4 line-clamp-1", {
            "border-b border-border": i + 1 !== length,
          })}
        >
          {a &&
            a.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.title + ",",
              ""
            )}
        </div>
      );
    }
    return listSub;
  };

  const handleDeleteCategory = (id: number) => {
    setModal(<ConfirmModal onDelete={() => {}} />);
  };
  const handleEditCategory = (data?: any) => {
    setModal(<EditCategoryForm category={data} />);
  };

  return (
    <div className="">
      <div>
        <div className="border-t border-l border-border grid grid-cols-[56px_420px_420px_420px_110px]">
          <div className="border-b border-r border-border h-12 flex items-center justify-center px-4">
            <input type="checkbox" />
          </div>
          {categoriesTh.map((tbTh, indexTh) => {
            return (
              <div
                key={indexTh}
                className="border-b border-r border-border h-12 flex items-center px-4"
              >
                {t(tbTh)}
              </div>
            );
          })}
        </div>
        {data.map((category, indexC) => {
          return (
            <div
              key={indexC}
              className=" border-l border-border grid grid-cols-[56px_420px_420px_420px_110px]"
            >
              <div className="border-b border-r border-border flex items-center justify-center px-4">
                <input type="checkbox" />
              </div>
              <div className="border-b border-r border-border flex items-center px-4">
                {category?.title}
              </div>

              <div className="border-b border-r border-border flex flex-col">
                {category?.children.map((cate2: any, index2: number) => {
                  return (
                    <div
                      key={index2}
                      className={clsx(" h-12 flex items-center px-4", {
                        "border-b border-border":
                          index2 + 1 !== category?.children.length,
                      })}
                    >
                      {cate2?.name}
                    </div>
                  );
                })}
              </div>
              <div className="border-b border-r border-border flex flex-col">
                {renderCate3(category)}
              </div>
              <div className="border-b border-r border-border flex items-center justify-center gap-2 px-4 cursor-pointer">
                <div onClick={() => handleEditCategory(category)}>
                  <IcEdit />
                </div>
                <div onClick={() => handleDeleteCategory(indexC)}>
                  <IcDelete />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesTable;
