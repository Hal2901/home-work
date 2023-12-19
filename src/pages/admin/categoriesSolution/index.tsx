import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IcPlusAdd from "../../../assets/icons/IcPlusAdd";
import { Button } from "../../../components/Button";
import { Pagination } from "../../../components/Paginnation";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { ModalContext } from "../../../context";
import { useLanguage } from "../../../hooks/useLanguage";
import { solutionCategoriesService } from "../../../services/solution/solutionCategoriesService";
import { CategorySolution } from "../../../types/categoriesType";
import { SizePage } from "../../../utils/constants";
import CategoriesSolutionTable from "./component/CategoriesSolutionTable";
import EditCategorySolution from "./component/EditCategorySolution";

export default function CategoriesSolution() {
  const { setModal } = useContext(ModalContext);
  const { isVN } = useLanguage();
  const navigate = useNavigate();
  const [categoriesList, setCategoriesList] = useState<CategorySolution[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const requestParam = {
    page: currentPage - 1,
    size: SizePage,
  };
  const handleEditCategory = (data?: any) => {
    setModal(<EditCategorySolution data={data} onReload={handleReload} />);
  };

  const getListCategories = async () => {
    try {
      const { total, data } = await solutionCategoriesService.getListCategories(
        requestParam
      );
      setCategoriesList(data);
      setTotalPage(Math.ceil(total / SizePage));
    } catch (error) {
      return;
    }
  };
  const handleReload = () => {
    if (currentPage === 1) {
      getListCategories();
    } else {
      setCurrentPage(1);
      navigate("");
    }
  };
  useEffect(() => {
    getListCategories();
  }, [currentPage]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <TitleAdminPage text="category_solution" />
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
        <CategoriesSolutionTable
          data={categoriesList}
          onReload={handleReload}
        />
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
