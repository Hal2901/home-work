import { useContext } from "react";
import IcPlusAdd from "../../../assets/icons/IcPlusAdd";
import { Button } from "../../../components/Button";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { ModalContext } from "../../../context";
import { categories } from "../../../utils/common";
import EditCategoryForm from "./component/EditCategoryForm";
import CategoriesTable from "./component/CategoriesTable";

export default function CategoriesProducts() {
  const { setModal } = useContext(ModalContext);
  const handleReload = () => {};
  const handleEditCategory = (data?: any) => {
    setModal(<EditCategoryForm category={data} />);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <TitleAdminPage text="category" />
        <Button
          color="empty"
          text="add_category"
          className="px-6 py-3 !w-fit"
          imageLeft={<IcPlusAdd />}
          onClick={() => handleEditCategory()}
        />
      </div>

      <div className="py-8">
        <CategoriesTable data={categories} onReload={handleReload} />
      </div>
    </div>
  );
}
