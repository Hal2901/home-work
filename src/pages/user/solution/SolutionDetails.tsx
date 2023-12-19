import { useParams } from "react-router-dom";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import SliderProposeItem from "../../../components/SliderProposeItem";
import TitlePage from "../../../components/TitlePage";
import { listBreads } from "../../../utils/common";
import { useEffect, useState } from "react";
import { solutionType } from "../../../types/solutionType";
import { solutionService } from "../../../services/solution/solutionService";

const SolutionDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<solutionType>();
  const handleFetchDetails = async (id: number) => {
    try {
      const result = await solutionService.getDetailsSolution(id);
      setData(result);
    } catch (error) {}
  };

  useEffect(() => {
    if (id) {
      handleFetchDetails(+id);
    }
  }, [id]);
  return (
    <div>
      <Banner typeBanner="SOLUTION" />
      <Breadcrumb listBreads={listBreads} />
      <div className="px-300 py-88">
        <div>
          <p className="text-40 font-semibold mb-10">{data?.title}</p>
          <div
            className="mb-10"
            dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
          ></div>
        </div>
        <TitlePage text="related_pr" />
        <SliderProposeItem
          slidesPerView={4}
          spaceBetween={24}
          typeCard="products"
        />
        <TitlePage text="proposed_solutions" />
        <SliderProposeItem />
      </div>
    </div>
  );
};

export default SolutionDetails;
