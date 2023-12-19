import React from "react";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { listBreads } from "../../../utils/common";
import { useTranslation } from "react-i18next";
import SliderProposeItem from "../../../components/SliderProposeItem";
import { SwiperSlide } from "swiper/react";
import StaffItem from "./component/StaffItem";
import { StaffCard } from "../../../assets/images";

const Staff = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Banner typeBanner="EMPLOYEE" />
      <Breadcrumb listBreads={listBreads} />
      <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5 lg:py-88 py-10 flex flex-col items-center">
        <p className="lg:text-40 text-3xl font-semibold mb-10 text-center 2xl:max-w-[60%]">
          {t("staff_of_company")}
        </p>
        <SliderProposeItem
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((staff, index) => {
            return (
              <SwiperSlide key={index}>
                <StaffItem
                  item={{
                    name: "Nguyễn Thị Ngọc",
                    position: "Tester",
                    imageLink: StaffCard,
                  }}
                />
              </SwiperSlide>
            );
          })}
        </SliderProposeItem>
      </div>
    </div>
  );
};

export default Staff;
