import { Link } from "react-router-dom";
import LogoHeader from "../components/LogoHeader";
import { useTranslation } from "react-i18next";
import { Fragment } from "react";

export default function Footer() {
  const { t } = useTranslation();
  const footerContents = [
    {
      title: "solution_and_pr",
      item: [
        { name: "Hệ thống đồng", path: "/", icon: null },
        { name: "Hệ thống sợi", path: "/", icon: null },
        { name: "Hệ thống thông minh", path: "/", icon: null },
        { name: "Cơ sở hạ tầng viễn thông", path: "/", icon: null },
        { name: "Giải pháp trung tâm dữ liệu", path: "/", icon: null },
        { name: "Giải pháp khu vực làm việc", path: "/", icon: null },
      ],
    },
    {
      title: "resource",
      item: [
        { name: "Danh sách dữ liệu", path: "/", icon: null },
        { name: "Chính sách", path: "/", icon: null },
        { name: "Chứng nhận", path: "/", icon: null },
        { name: "Video", path: "/", icon: null },
      ],
    },
    {
      title: "partner",
      item: [
        { name: "Tìm kiếm đối tác", path: "/", icon: null },
        { name: "Đăng ký trở thành đối tác", path: "/", icon: null },
        { name: "Kiểm tra chứng nhận bảo hành", path: "/", icon: null },
      ],
    },
    {
      title: "about_us",
      item: [
        { name: "LS Cable & System Vietnam", path: "/", icon: null },
        { name: "LS Cable & System", path: "/", icon: null },
        { name: "Lịch sử hình thành", path: "/", icon: null },
        { name: "Đội ngũ nhân viên", path: "/", icon: null },
        { name: "Tin tức", path: "/", icon: null },
      ],
    },
  ];
  return (
    <div>
      <div className="sc1800:px-300 xl:px-[155px] md:px-100 px-5 bg-[#353535] py-[88px]">
        <div className="grid 2xl:grid-cols-[420px_1fr] grid-cols-1 gap-6 gap-y-10">
          <div>
            <div className="mb-6">
              <LogoHeader />
            </div>
            <p className="text-base text-white">
              (C) bản quyền 2015 của LS Cable & System. Đã đăng ký Bản quyền.
            </p>
          </div>
          <div className="grid  xl:grid-cols-4 xs:grid-cols-2 gap-y-6">
            {footerContents.map((item, index) => {
              return (
                <div key={index} className="sc1800:pl-0 2xl:pl-2 ">
                  <p className="text-lg font-medium mb-6 text-white flex items-end">
                    {t(item.title)}
                  </p>
                  <div className="flex flex-col justify-start">
                    {item.item.map((content, indexC) => {
                      return (
                        <Link
                          key={indexC}
                          to={content.path}
                          className="text-sm text-white py-2"
                        >
                          {content.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#013775]">
        <div className="sc1800:px-300 md:px-[155px] px-5 md:py-[72px] py-10 flex items-center xl:justify-between justify-center flex-wrap gap-6">
          <p className="text-[#9795B5] text-lg">
            Copyright © 2023 BRIX Templates
          </p>
          <p className="text-[#9795B5] text-lg">
            All Rights Reserved |
            <span className="underline">Terms and Conditions</span> |{" "}
            <span className="underline"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
