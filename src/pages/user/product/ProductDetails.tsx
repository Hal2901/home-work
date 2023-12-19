import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  A11y,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IcBagua from "../../../assets/icons/IcBagua";
import IcCard from "../../../assets/icons/IcCard";
import IcResource from "../../../assets/icons/IcResource";
import IcSetting from "../../../assets/icons/IcSetting";
import { productCard } from "../../../assets/images";
import colors from "../../../common/colors";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { listBreads } from "../../../utils/common";
import ProductActionBox from "./component/ProductActionBox";
import ProductVariation from "./component/ProductVariation";

import ProductSpecial from "./component/ProductSpecial";
import Support from "./component/Support";
const listFilter = [
  { name: "product_variation", id: 1 },
  { name: "special", id: 2 },
  { name: "product_support", id: 3 },
];

const listBoxAction = [
  {
    icon: <IcCard />,
    text: "order_guide",
  },
  {
    icon: <IcSetting />,
    text: "setting",
  },
  {
    icon: <IcResource color={colors.main} />,
    text: "data_table",
  },
  {
    icon: <IcBagua />,
    text: "image_example",
  },
];
const ProductDetails = () => {
  const { t } = useTranslation();
  const [detailsId, setDetailsId] = useState<number>(listFilter[0].id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Banner typeBanner="PRODUCT" />
      <Breadcrumb listBreads={listBreads} />
      <div className="px-300 my-88 ">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                FreeMode,
                Thumbs,
              ]}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={0}
              slidesPerView={1}
              pagination={false}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => {}}
              onSlideChange={() => {}}
              className="h-full"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <SwiperSlide key={index} className="h-full">
                    <img
                      src={productCard}
                      alt=""
                      className="w-full object-contain h-full border border-border rounded-md"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex flex-col gap-6">
            <p className="break-words text-main text-3xl font-semibold">
              1071E
            </p>
            <p className="font-medium">Thông tin sản phẩm</p>
            <p className="break-words">
              Cáp quang 4FO bọc chặt có vỏ làm từ chất liệu nhựa tổng hợp HDPE
              với nhiều thành phần giúp cáp không bị thấm nước, khó bị phá vỡ ở
              mức nhiệt cao cũng như tác động cơ học bên ngoài môi trường. Trong
              cáp còn được gia cố thêm bằng dây gia cường được tạo thành từ
              nhiều sợi thép dạng xoắn giúp cho dây cáp có sức căng tốt hơn,
              không bị trùng khi thi công trên quãng đường dài. Bao bọc lõi
              truyền dẫn còn có lớp ống đệm lỏng và dầu bảo vệ nhằm tạo ra một
              góc gập lớn hơn cho dây cáp và bảo vệ chúng khỏi sự xâm hại
            </p>
            <p className="font-medium">
              Giá bán đề xuất: <span className="text-danger">150.000 VNĐ</span>
            </p>
            <p className="font-medium">Tài liệu kĩ thuật</p>
            <div className="grid grid-cols-2 gap-4">
              {listBoxAction.map((action, index) => {
                return (
                  <ProductActionBox
                    key={index}
                    icon={action.icon}
                    text={action.text}
                    onCoppy={() => {}}
                    onDownload={() => {}}
                  />
                );
              })}
            </div>
          </div>

          <div className="h-10 mt-6 mb-88">
            <Swiper
              spaceBetween={0}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <SwiperSlide key={index} className="h-full cursor-pointer">
                    <img
                      src={productCard}
                      alt=""
                      className="w-full object-contain h-full border border-border"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="flex px-300 bg-whiteFAFAFA border-b border-b-border">
        {listFilter.map((btn, indexBtnn) => {
          return (
            <button
              key={indexBtnn}
              onClick={() => setDetailsId(btn.id)}
              className={clsx(
                "h-16 flex items-center justify-center font-medium w-200",
                {
                  "text-white bg-main": detailsId == btn.id,
                }
              )}
            >
              {t(btn.name)}
            </button>
          );
        })}
      </div>
      <div className="px-300 py-88">
        {detailsId === 1 && <ProductVariation />}
        {detailsId === 2 && <ProductSpecial />}
        {detailsId === 3 && <Support />}
      </div>
    </div>
  );
};

export default ProductDetails;
