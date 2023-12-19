import React from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Banner from "../../../components/Banner";
import { listBreads, listHistories } from "../../../utils/common";
import { useTranslation } from "react-i18next";
import HistoryItem from "./component/HistoryItem";

const Histories = () => {
  const { t } = useTranslation();
  const historiesData = listHistories;
  return (
    <div>
      <Banner typeBanner="HISTORY" />
      <Breadcrumb listBreads={listBreads} />
      <div className="px-300 py-88 flex flex-col items-center">
        <p className="text-40 font-semibold mb-10 text-center max-w-[60%]">
          {t("history_title")}
        </p>
        <div className="grid grid-cols-2 relative">
          <div className="pt-160 ">
            <HistoryItem
              item={historiesData[0]}
              reverse={true}
              color="blue"
              className="history_left"
            />
            <HistoryItem
              item={historiesData[0]}
              reverse={true}
              color="gray"
              className="history_left"
            />
            <HistoryItem
              item={historiesData[0]}
              reverse={true}
              color="gray"
              className="history_left"
            />
          </div>
          <div className="pt-10">
            <HistoryItem
              item={historiesData[0]}
              reverse={false}
              color="pink"
              className="history_right"
            />
            <HistoryItem item={historiesData[0]} reverse={false} color="gold" />
            <HistoryItem item={historiesData[0]} reverse={false} color="pink" />
          </div>
          <div className="absolute top-0 left-1/2 w-1 bg-border -translate-x-1/2 h-full -z-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Histories;
