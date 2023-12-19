import * as Yup from "Yup";
import { useFormik } from "formik";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import IcAddress from "../../../assets/icons/IcAddress";
import IcArrowsNex from "../../../assets/icons/IcArrowsNex";
import IcPhone from "../../../assets/icons/IcPhone";
import IcProxy from "../../../assets/icons/IcProxy";
import {
  BgContact,
  ContactBottom,
  ContactPerson,
  ContactRight,
  ContactTop,
  ContactTree,
  ImageContactCard,
} from "../../../assets/images";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { Button } from "../../../components/Button";
import { InputElement } from "../../../components/InputElement";
import LabelInput from "../../../components/LabelInput";
import { TextAreaElement } from "../../../components/TextAreaElement";
import { listBreads } from "../../../utils/common";
import OfficeItem from "./OfficeItem";
import { ContactType } from "../../../types/contactType";
import TextError from "../../../components/TextError";
import { contactService } from "../../../services/contactService";

const listIconContact = [
  {
    text: "38 Nguyễn Phong Sắc Kéo Dài, Cầu Giấy, Hà Nội",
    type: "address",
  },
  {
    text: "0913-021-916",
    type: "phone",
  },
  {
    text: "http:zalo.me/g/kiygcq96",
    type: "link-web",
  },
  {
    text: "Diendadung.com.vn",
    type: "link-web",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const formik = useFormik<ContactType>({
    initialValues: {
      id: undefined,
      fullname: "",
      phone: "",
      email: "",
      address: "  ",
      content: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().trim().required("require.empty").max(255, "max"),
      phone: Yup.string()
        .trim()
        .required("require.empty")
        .matches(/([0-9]{10})\b/g, "invalid_phone_number")
        .max(10, "max"),
      email: Yup.string()
        .email("invalid_email")
        .required("require.empty")
        .max(255, "max"),
      content: Yup.string().trim().required("require.empty"),
    }),
    onSubmit: async (value) => {
      try {
        const result = await contactService.addContact(value);
        toast.success(t("message.success.posted_contact"));
        handleReset({
          id: undefined,
          fullname: "",
          phone: "",
          email: "",
          address: "",
          content: "",
          feedback: "",
        });
      } catch (error) {
        toast.error(t("message.error.posted_contact"));
      }
    },
  });
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleReset,
    handleSubmit,
  } = formik;

  return (
    <div>
      <Banner typeBanner="CONTACT" />
      <Breadcrumb listBreads={listBreads} />
      <div
        style={{ backgroundImage: `url(${BgContact})` }}
        className="bg-no-repeat bg-bottom object-cover bg-white"
      >
        <div className="px-300 pt-88 grid grid-cols-[420px_1fr] gap-x-[116px]">
          <img src={ImageContactCard} alt="" className="w-full h-500" />
          <div>
            <p className="font-semibold text-[32px] leading-[40px] mb-[32px]">
              Công ty LS Cable & System Việt Nam
            </p>
            <p className="mb-4">
              Tự hào là đơn vị đi đầu trong việc nhập khẩu và phân phối thiết bị
              điện LS – Hàn Quốc. Với hệ thống Website trực tuyến phân phối các
              sản phẩm thiết bị điện lớn nhất tại Việt Nam. Tự hào là nhà cung
              ứng vật tư điện hàng đầu cho các công trình trọng điểm trên cả
              nước. SIRIUS Việt Nam – Tiên phong về giá, đi đầu về dịch vụ.Tự
              hào là đơn vị đi đầu trong việc nhập khẩu và phân phối thiết bị
              điện LS – Hàn Quốc. Với hệ thống Website trực tuyến phân phối các
              sản phẩm thiết bị điện lớn nhất tại Việt Nam. Tự hào là nhà cung
              ứng vật tư điện hàng đầu cho các công trình trọng điểm trên cả
              nước. SIRIUS Việt Nam – Tiên phong về giá, đi đầu về dịch vụ.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {listIconContact.map((contact, indexC) => {
                return (
                  <div key={indexC} className="flex items-center gap-4">
                    <div className="rounded-1/2 bg-main flex items-center justify-center w-10 h-10">
                      {contact.type === "link-web" ? (
                        <IcProxy />
                      ) : contact.type === "address" ? (
                        <IcAddress />
                      ) : (
                        <IcPhone />
                      )}
                    </div>
                    <p>{contact.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pl-300 py-16">
          <div className="flex items-center pr-200 justify-between mb-9">
            <p className="text-40 font-semibold text-white">
              Văn phòng đại diện tại Tp.HCM
            </p>
            <div className="flex items-center gap-6">
              <button
                ref={navigationPrevRef}
                className="flex items-center justify-center  rotate-180 rounded-1/2 w-12 h-12 border border-white hover:bg-color_cyan"
              >
                <IcArrowsNex />
              </button>
              <button
                ref={navigationNextRef}
                className="flex items-center justify-center rounded-1/2 w-12 h-12 border border-white hover:bg-color_cyan"
              >
                <IcArrowsNex />
              </button>
            </div>
          </div>
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={24}
              slidesPerView={2.5}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={false}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper: any) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }, 300);
              }}
              onSlideChange={() => {}}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <OfficeItem
                      index={index}
                      item={{
                        nameContact: "Nguyễn Hoàng Minh",
                        part: "Tester Cable",
                        position: "Trưởng phòng",
                        phoneNumber: "0965832456",
                        email: "Nguyenhoangminh@gmail.com",
                        factory: " Nhà máy sản xuất Cable",
                        address:
                          "134 Trường Chinh, Đống Đa, Thanh Xuân, Hồ Chí Minh",
                        phoneContact: "0325333668",
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="px-300 my-88">
        <p className="text-40 font-semibold mb-4 text-center">
          {t("live_contact_info")}
        </p>
        <p className="font-medium text-center mb-8">{t("troubleshooting")}</p>

        <div className="px-160 pt-100 pb-160 relative border-b">
          <div className="rounded-[30px] border border-defaultText px-16 py-5 bg-[#E0E0E0] relative min-h-[500px]">
            <div className="absolute top-1/2 left-7 -translate-y-1/2 w-2 bg-[#BFBFBF] h-200"></div>
            <div className="border border-defaultText bg-white h-full">
              <div className="h-[55px] bg-[#9A8143] px-[72px] flex items-center text-white text-lg font-bold">
                {t("form_contact")}
              </div>
              <div className="p-[72px]">
                <div className="mb-6">
                  <LabelInput text="full_name" />
                  <InputElement
                    placeholder="input_full_name"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                  />
                  {errors.fullname && touched.fullname && (
                    <TextError
                      text={errors.fullname}
                      option={{ name: "họ tên" }}
                    />
                  )}
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <LabelInput text="email" />
                    <InputElement
                      placeholder="input_email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <TextError
                        text={errors.email}
                        option={{ name: "email" }}
                      />
                    )}
                  </div>
                  <div className="">
                    <LabelInput text="phone_number" />
                    <InputElement
                      placeholder="input_phone_number"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && touched.phone && (
                      <TextError
                        text={errors.phone}
                        option={{ name: "số diện thoại", length: 10 }}
                      />
                    )}
                  </div>
                </div>
                <div className="mb-6">
                  <LabelInput text="content_contact" />
                  <TextAreaElement
                    placeholder="input_content_contact"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                  />
                  {errors.content && touched.content && (
                    <TextError
                      text={errors.content}
                      option={{ name: "nội dung" }}
                    />
                  )}
                </div>
                <div className="flex justify-center">
                  <Button
                    color="primary"
                    text="send"
                    className="px-6 py-3 !w-fit"
                    disabled={isSubmitting}
                    onClick={() => handleSubmit()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-10 z-[-1]">
            <img src={ContactTop} alt="" />
          </div>
          <div className="absolute top-0 right-10 z-[-1]">
            <img src={ContactRight} alt="" />
          </div>
          <div className="absolute bottom-0 right-10 z-[-1]">
            <img src={ContactBottom} alt="" />
          </div>
          <div className="absolute bottom-0 left-10 z-10">
            <img src={ContactTree} alt="" />
          </div>
          <div className="absolute bottom-0 right-10 z-10">
            <img src={ContactPerson} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
