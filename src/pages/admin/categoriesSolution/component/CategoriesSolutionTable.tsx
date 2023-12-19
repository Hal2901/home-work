import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import IcDelete from "../../../../assets/icons/IcDelete";
import IcEdit from "../../../../assets/icons/IcEdit";
import { ModalContext } from "../../../../context";
import { ConfirmModal } from "../../../../context/ConfirmModal";
import { CategorySolution } from "../../../../types/categoriesType";
import { categoriesSolutionTh } from "../../../../utils/common";
import EditCategorySolution from "./EditCategorySolution";
import { solutionCategoriesService } from "../../../../services/solution/solutionCategoriesService";
import { toast } from "react-toastify";

interface Props {
  data: CategorySolution[];
  onReload: () => void;
}
const CategoriesSolutionTable = memo(({ data, onReload }: Props) => {
  const { t } = useTranslation();
  const { setModal, closeModal } = useContext(ModalContext);
  const handleDeleteCategory = (id: number) => {
    const handleDeleteCategory = async () => {
      try {
        await solutionCategoriesService.deleteCategory(id);
        toast.success(t("message.success.deleted_solution_cate"));
        onReload();
      } catch (error) {
        toast.error(t("message.error.deleted_solution_cate"));
      } finally {
        closeModal();
      }
    };
    setModal(<ConfirmModal onDelete={() => handleDeleteCategory()} />);
  };

  const handleEditCategory = (data?: any) => {
    setModal(<EditCategorySolution data={data} />);
  };

  return (
    <div>
      <div className="border-t border-l border-border grid grid-cols-[5%_40%_40%_15%]">
        <div className="border-b border-r border-border h-12 flex items-center justify-center px-4">
          <input type="checkbox" />
        </div>
        {categoriesSolutionTh.map((tbTh, indexTh) => {
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
      {data.map((cate, indexC) => {
        return (
          <div
            key={indexC}
            className="border-t border-l border-border grid grid-cols-[5%_40%_40%_15%] h-14"
          >
            <div className="border-b border-r border-border flex items-center justify-center px-4">
              <input type="checkbox" />
            </div>
            <div className="border-b border-r border-border flex items-center px-4">
              {cate?.title}
            </div>
            <div className="border-b border-r border-border flex items-center px-4 line-clamp-1">
              {cate?.children.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.title + ",",
                " "
              )}
            </div>
            <div className="border-b border-r border-border flex items-center justify-center gap-2 px-4 cursor-pointer">
              <div onClick={() => handleEditCategory(cate)}>
                <IcEdit />
              </div>
              <div onClick={() => handleDeleteCategory(cate.id!)}>
                <IcDelete />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CategoriesSolutionTable;
