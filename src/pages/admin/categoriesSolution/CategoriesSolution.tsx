import { useContext, useEffect, useState } from "react";
import IcPlusAdd from "../../../assets/icons/IcPlusAdd";
import { Button } from "../../../components/Button";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { ModalContext } from "../../../context";
import { categories } from "../../../utils/common";
import CategoriesSolutionTable from "./component/CategoriesSolutionTable";
import EditCategorySolution from "./component/EditCategorySolution";
import { useLanguage } from "../../../hooks/useLanguage";
import { solutionCategoriesService } from "../../../services/solution/solutionCategoriesService";
import { Pagination } from "../../../components/Paginnation";
import { CategorySolution } from "../../../types/categoriesType";

export default function CategoriesSolution() {
  const { setModal } = useContext(ModalContext);
  const { isVN } = useLanguage();
  const [categoriesList, setCategoriesList] = useState<CategorySolution[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  const handleEditCategory = (data?: any) => {
    setModal(<EditCategorySolution data={data} />);
  };

  const getListCategories = async () => {
    try {
      const { total, data } = await solutionCategoriesService.getListCategories(
        {
          page: 0,
          size: 12,
        }
      );
      setCategoriesList(data);
      setTotalPage(Math.ceil(total / SizePage));
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    getListCategories();
  }, []);
  const handleReload = () => {};
  return (
    <div>
      <div className="flex items-center justify-between">
        <TitleAdminPage text="category" />
        <Button
          disabled={!isVN}
          color="empty"
          text="add_category"
          className="px-6 py-3 !w-fit"
          imageLeft={<IcPlusAdd />}
          onClick={() => handleEditCategory()}
        />
      </div>

      <div className="py-8">
        <CategoriesSolutionTable data={categories} onReload={handleReload} />
      </div>

      {totalPage > 1 && (
        <div className="my-8 flex justify-end ">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}
