import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import IcPlusAdd from "../../assets/icons/IcPlusAdd";
import IcSort from "../../assets/icons/IcSort";
import { Button } from "../../components/Button";
import { InputElement } from "../../components/InputElement";
import { Pagination } from "../../components/Paginnation";
import ProductCard from "../../components/admin/ProductCard";
import TitleAdminPage from "../../components/admin/TitleAdminPage";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { ModalContext } from "../../context";
import { ConfirmModal } from "../../context/ConfirmModal";
import { useSearchParamHook } from "../../hooks/useSearchParam";
import NoContent from "../../pages/NoContent";
import { solutionService } from "../../services/solution/solutionService";
import { solutionType } from "../../types/solutionType";
import { generalPageType, initialTypeTopic } from "../../types/topicType";
import { Params, SizePage } from "../../utils/constants";
import { privatePath } from "../../utils/routers";
import { topicService } from "../../services/toppic/topicService";
import { useLanguage } from "../../hooks/useLanguage";
interface Props {
  typePage: generalPageType;
  titlePage?: string;
  pathRedirect?: string;
  textBtnEdit?: string;
  textBtnDelete?: string;
  hiddenStar?: boolean;
}

export default function GeneralPageCardAdmin({
  typePage,
  titlePage = "list_pr",
  pathRedirect = "them-san-pham",
  textBtnDelete = "delete_solution",
  textBtnEdit = "edit_solution",
  hiddenStar = false,
}: Props) {
  const navigage = useNavigate();
  const { t } = useTranslation();
  const { isVN } = useLanguage();
  const { setModal } = useContext(ModalContext);
  const { searchParams, setSearchParam } = useSearchParamHook();
  const page = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState<number>((page && +page) || 1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [filter, setFilter] = useState<"desc" | "asc">("desc");
  const [keySearch, setKeySearch] = useState<string>("");
  const [listData, setListData] = useState<solutionType[] | initialTypeTopic[]>(
    []
  );

  const QueryParams = {
    search:
      (typePage === "VIDEO" || typePage === "NEWS") && keySearch != ""
        ? keySearch
        : undefined,
    page: currentPage - 1,
    size: SizePage,
    sort: `id,${filter}`,
    type: typePage === "VIDEO" || typePage === "NEWS" ? typePage : undefined,
  };
  const handleAdProduct = () => {
    navigage(pathRedirect);
  };
  const handleFilter = (filter: "asc" | "desc") => {
    setFilter(filter);
  };
  const handleEdit = (id: number) => {
    let pathRedirect = "";
    switch (typePage) {
      case "PRODUCT":
        pathRedirect = `${privatePath.product.index}/${id}`;
        break;

      case "SOLUTION":
        pathRedirect = `${privatePath.solution.solution}/${id}`;
        break;

      case "VIDEO":
        pathRedirect = `${privatePath.video.index}/${id}`;
        break;
      case "NEWS":
        pathRedirect = `${privatePath.news.index}/${id}`;
        break;

      default:
        break;
    }
    navigage(pathRedirect);
  };
  const handleDelete = (id: number) => {
    const handleDeleteItem = async () => {
      try {
        switch (typePage) {
          case "PRODUCT":
            break;

          case "SOLUTION":
            await solutionService.deleteSolution(id);
            break;

          case "VIDEO":
          case "NEWS":
            await topicService.deleteTopic(id);
            break;

          default:
            break;
        }
        handleReload();
        toast.success(t("message.success.deleted_success"));
      } catch (error) {
        toast.success(t("message.error.deleted_success"));
      }
    };
    setModal(<ConfirmModal onDelete={() => handleDeleteItem()} />);
  };

  const handleReload = () => {
    if (currentPage === 1) {
      handleFetchData(QueryParams);
    } else {
      setCurrentPage(1);
      setSearchParam("");
    }
    setKeySearch("");
  };
  const handleChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setListData([]);
    setCurrentPage(1);
    setSearchParam("");
    setKeySearch(value);
    handleDebounce(value);
  };

  const handleDebounce = useCallback(
    debounce(
      (key: string) =>
        handleSearchData(key, {
          page: 0,
          size: SizePage,
          sort: `id,${filter}`,
        }),
      1000
    ),
    []
  );

  const handleSearchData = async (inputSearch: string, params: Params) => {
    try {
      let totalPage: number = 0;
      let ListData: solutionType[] | initialTypeTopic[] = [];

      switch (typePage) {
        case "PRODUCT":
          break;

        case "SOLUTION":
          const { total, data } = await solutionService.searchSolution(
            inputSearch,
            params
          );

          totalPage = total;
          ListData = data;
          break;

        case "VIDEO":
        case "NEWS":
          const { total: total2, data: data2 } =
            await topicService.searchTopics({
              search: inputSearch,
              type: typePage,
              ...params,
            });

          totalPage = total2;
          ListData = data2;
          break;

        default:
          break;
      }
      setListData(ListData);
      setTotalPage(Math.ceil(totalPage / SizePage));
    } catch (error) {}
  };

  const handleFetchData = async (params: Params) => {
    try {
      let totalElements: number = 0;
      let ListData: solutionType[] | initialTypeTopic[] = [];
      switch (typePage) {
        case "PRODUCT":
          break;

        case "SOLUTION":
          const { total, data } = await solutionService.getListSolutions(
            params
          );
          totalElements = total;
          ListData = data;
          break;

        case "VIDEO":
        case "NEWS":
          const { total: total2, data: data2 } =
            await topicService.getListTopic(params);
          totalElements = total2;
          ListData = data2;
          break;

        default:
          break;
      }
      setListData(ListData);
      setTotalPage(Math.ceil(totalElements / SizePage));
    } catch (error) {}
  };

  useEffect(() => {
    if (keySearch !== "") return;
    handleDebounce.cancel();
    handleFetchData(QueryParams);
  }, [currentPage, filter, keySearch]);

  useEffect(() => {
    if (keySearch !== "") handleSearchData(keySearch, QueryParams);
  }, [currentPage, filter]);

  return (
    <div>
      <TitleAdminPage text={titlePage} />
      <div className="grid grid-cols-2 my-8">
        <div>
          <InputElement
            placeholder="input_key_search"
            name="name"
            value={keySearch}
            reSearch={true}
            onChange={handleChangeInputSearch}
          />
        </div>
        <div className="flex items-center justify-end gap-6">
          <Button
            color="empty"
            text={
              typePage === "PRODUCT"
                ? "add_pr"
                : typePage === "SOLUTION"
                ? "add_solution"
                : typePage === "NEWS"
                ? "add_news"
                : "add_video"
            }
            className="px-6 py-3 !w-fit"
            disabled={!isVN}
            imageLeft={<IcPlusAdd />}
            onClick={handleAdProduct}
          />
          <Button
            color="empty"
            text="latest"
            className="px-6 py-3 !w-fit"
            imageLeft={<IcSort />}
            onClick={() => handleFilter("desc")}
          />
          <Button
            color="empty"
            text="oldest"
            className="px-6 py-3 !w-fit"
            imageLeft={
              <span className="rotate-180">
                <IcSort />
              </span>
            }
            onClick={() => handleFilter("asc")}
          />
        </div>
      </div>

      {listData.length === 0 ? (
        <NoContent />
      ) : (
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
          {listData.map((pr, indPr) => {
            return (
              <ProductCard
                textBtnEdit={textBtnEdit}
                textBtnDelete={textBtnDelete}
                key={indPr}
                item={pr}
                onEdit={() => handleEdit(pr.id!)}
                onDelete={() => {
                  handleDelete(pr.id!);
                }}
                hiddenStar={hiddenStar}
              />
            );
          })}
        </div>
      )}

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
