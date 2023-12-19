import { useNavigate } from "react-router-dom";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { Button } from "../../../components/Button";
import CategoryBox from "../../../components/categories/CategoryBox";
import ProductCard from "../../../components/ProductCard";
import TitlePage from "../../../components/TitlePage";

export default function Products() {
  const navigate = useNavigate();
  const listBreads = [
    {
      name: "product",
      path: "/san-pham",
    },
  ];
  const handleViewDetailProduct = (id: number) => {
    navigate(listBreads[0].path + "/" + id);
  };
  return (
    <div>
      <Banner typeBanner="PRODUCT" />
      <Breadcrumb listBreads={listBreads} />
      <div className="px-300 py-88">
        <TitlePage text="list_pr" />
        <div className="min-h-screen grid grid-cols-[300px_1fr] gap-6 max-h-screen overflow-y-scroll hidden-scroll pt-2">
          <div className="max-h-screen overflow-y-scroll hidden-scroll">
            <CategoryBox nameCategory="category" typeCategory="products" />
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
              return (
                <ProductCard
                  key={item}
                  onClickPr={() => handleViewDetailProduct(item)}
                />
              );
            })}
            <div className="col-span-3">
              <Button color="empty" text="see_more" className="px-6 py-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
