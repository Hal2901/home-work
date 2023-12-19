import React, { useEffect, useState } from "react";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { listBreads } from "../../../utils/common";
import TitlePage from "../../../components/TitlePage";
import SliderProposeItem from "../../../components/SliderProposeItem";
import { initialTypeTopic } from "../../../types/topicType";
import { topicService } from "../../../services/toppic/topicService";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import NoContent from "../../NoContent";

const NewsDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<initialTypeTopic>();
  const getDetailsTopic = async (id: number) => {
    try {
      setLoading(true);
      const data = await topicService.getDetailsTopic(id, {
        type: "NEWS",
      });
      setData(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getDetailsTopic(+id);
    }
  }, [id]);
  return (
    <div>
      <Banner typeBanner="NEWS" />
      <Breadcrumb listBreads={listBreads} />
      <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5 lg:py-88 py-10">
        <p className="lg:text-40 text-3xl font-semibold mb-10">{data?.title}</p>
        {loading ? (
          <Loading />
        ) : data ? (
          <div
            className="ql-editor mb-10"
            dangerouslySetInnerHTML={{ __html: data.content! ?? "" }}
          ></div>
        ) : (
          <NoContent />
        )}
        <div>
          <TitlePage text="proposed_solutions" />
          <SliderProposeItem
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
