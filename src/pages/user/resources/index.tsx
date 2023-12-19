import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { Pagination } from "../../../components/Paginnation";
import TitlePage from "../../../components/TitlePage";
import { dataDocumentsFake, listBreads } from "../../../utils/common";
import ListDocuments from "./component/ListDocuments";
import { topicService } from "../../../services/toppic/topicService";
import { initialTypeTopic } from "../../../types/topicType";
import { Params, SizePage } from "../../../utils/constants";
import Loading from "../../Loading";
import NoContent from "../../NoContent";
import { useSearchParamHook } from "../../../hooks/useSearchParam";

interface Props {
  typePage?: "DOC" | "TRAINING";
}
const Resources = ({ typePage = "DOC" }: Props) => {
  const { searchParams } = useSearchParamHook();
  const page = searchParams.get("page");
  const [loading, setLoading] = useState<boolean>(false);
  const [listData, setListData] = useState<initialTypeTopic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>((page && +page) || 1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const param: Params = {
    type: typePage,
    page: currentPage - 1,
    size: SizePage,
    sort: "id,desc",
  };
  const handleFetchData = async () => {
    try {
      setLoading(true);
      const { total, data } = await topicService.getListTopic(param);
      if (data) {
        setListData(data);
        setTotalPage(Math.ceil(total / SizePage));
      }
    } catch (error) {
      setListData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [currentPage]);
  return (
    <div>
      <Banner typeBanner={typePage} />
      <Breadcrumb listBreads={listBreads} />
      <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5  lg:py-88 py-10">
        <TitlePage
          text={
            typePage === "DOC" ? "list_documents" : "list_documents_training"
          }
        />
        {loading ? (
          <Loading />
        ) : listData.length === 0 ? (
          <NoContent />
        ) : (
          <ListDocuments data={listData} />
        )}
        {totalPage > 1 && (
          <div className="flex justify-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
