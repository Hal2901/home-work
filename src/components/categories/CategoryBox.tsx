import clsx from "clsx";
import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import IcTooltip from "../../assets/icons/IcTooltip";
import colors from "../../common/colors";
import { solutionCategoriesService } from "../../services/solution/solutionCategoriesService";
import { CategoryParent } from "../../types/categoriesType";
import { useSearchParamHook } from "../../hooks/useSearchParam";

interface Props {
  nameCategory: string;
  typeCategory: string;
}
const CategoryBox = memo(({ nameCategory, typeCategory }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { searchParams } = useSearchParamHook();
  const categoryId = searchParams.get("danh-muc");
  const [categoriesList, setCategoriesList] = useState<CategoryParent[]>([]);
  const [parentId, setParentId] = useState<number>();
  const [childId, setChildId] = useState<number>();

  const handleActiveCategory = (id: number, index: number) => {
    switch (index) {
      case 0:
        if (parentId === id) {
          setParentId(undefined);
          setChildId(undefined);
          navigate("");
        } else {
          navigate(`?danh-muc=${id}`);
        }
        break;

      case 1:
        navigate(`?danh-muc=${id}`);
        break;

      default:
        break;
    }
  };
  const getListCategories = async () => {
    try {
      switch (typeCategory) {
        case "solution":
          const { total, data } =
            await solutionCategoriesService.getListCategories();
          setCategoriesList(data);
          break;

        default:
          break;
      }
    } catch (error) {
      return;
    }
  };
  useEffect(() => {
    getListCategories();
  }, []);

  useEffect(() => {
    if (categoriesList.length > 0 && categoryId) {
      categoriesList.forEach((item) => {
        if (item.id === +categoryId) {
          setParentId(+categoryId);
          setChildId(undefined);
        } else {
          item.children.forEach((itemChild) => {
            if (itemChild.id === +categoryId) {
              setParentId(item.id);
              setChildId(+categoryId);
            }
          });
        }
      });
    }
  }, [categoriesList, categoryId]);
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="h-14 py-3 bg-bg03">
        <p className="pl-4 border-l-4 border-l-main text-2xl text-defaultText font-semibold">
          {t(nameCategory)}
        </p>
      </div>

      <div>
        {categoriesList.map((itemCate, indexCate) => {
          return (
            <div
              key={indexCate}
              className={clsx(
                "cursor-pointer mb-4 py-1 transition-all overflow-hidden"
              )}
              style={{
                height:
                  parentId === itemCate.id && itemCate.children.length > 0
                    ? itemCate.children.length * 40 + 56
                    : 36,
              }}
            >
              <div
                className="flex gap-4"
                onClick={() => handleActiveCategory(itemCate.id!, 0)}
              >
                <span>
                  <IcTooltip
                    color={
                      parentId === itemCate.id ? colors.main : colors.gray01
                    }
                  />
                </span>
                <p className="text-xl font-medium line-clamp-2">
                  {itemCate.title}
                </p>
              </div>
              {parentId === itemCate.id &&
                itemCate?.children &&
                itemCate.children.map((child1, indexChild1) => {
                  return (
                    <div
                      key={indexChild1}
                      className="flex items-center gap-4 pl-10"
                    >
                      <div
                        className={clsx("flex items-center gap-4 h-10", {
                          "text-main": childId === child1.id,
                        })}
                        onClick={() => handleActiveCategory(child1.id!, 1)}
                      >
                        {typeCategory === "product" ? (
                          <IcTooltip color={colors.gray01} />
                        ) : (
                          <span
                            className={clsx("text-40 text-gray01", {
                              "!text-main": childId === child1.id,
                            })}
                          >
                            &#8729;
                          </span>
                        )}
                        {child1.title}
                      </div>

                      {child1?.children &&
                        child1.children.map((child2, indexChild2) => {
                          return (
                            <div
                              key={indexChild2}
                              className="flex items-center gap-4 pl-10"
                            >
                              <div className="flex items-center gap-4">
                                <span className="text-40 text-disabled">
                                  &#8729;
                                </span>
                                {child2.title}
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default CategoryBox;
