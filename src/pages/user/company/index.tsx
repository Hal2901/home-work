import React, { useState } from "react";
import Banner from "../../../components/Banner";
import Breadcrumb from "../../../components/Breadcrumb";
import { introduceGroupLeaders, listBreads } from "../../../utils/common";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/Button";
import InfoPerson from "./component/InfoPerson";
import LevelOfPerson from "./component/LevelOfPerson";
import { ImageChairman, ImageManager } from "../../../assets/images";

const data = [
  {
    imageLink: ImageChairman,
    title: undefined,
    messages:
      " Công nghệ và chất lượng tuyệt vời của chúng tôi trong việc cung cấp năng lượng và thông tin đã được công nhận kể từ khi thành lập từ nhiều thập kỷ trước. Kết quả là LS Cable & System đã phát triển thành nhà sản xuất cáp hàng đầu được công nhận trên toàn thế giới.",
  },
  {
    imageLink: ImageManager,
    title: "“We will become the world’s best cable maker”",
    messages:
      "LS Cable & System đang dẫn đầu sự đổi mới của ngành cáp bằng cách giới thiệu các sản phẩm năng lượng tái tạo như cáp ngầm và cáp quang điện góp phần trung hòa carbon toàn cầu và cáp xe điện đại diện cho kỷ nguyên điện.Dựa trên năng lực mà chúng tôi đã tích lũy được bằng cách đóng góp vào việc xây dựng mạng lưới truyền thông và năng lượng toàn cầu, chúng tôi sẽ cố gắng hết sức để trở thành một công ty luôn cung cấp các sản phẩm và giải pháp mà khách hàng có thể tin tưởng thông qua hoạt động R&D và đầu tư liên tục.",
  },
];
const Company = () => {
  const { t } = useTranslation();
  const [isChairPersion, setChairPersion] = useState<boolean>(true);
  const [persident, setDataPersident] = useState(data[0]);
  const [infoPersident, setInfoPersident] = useState(introduceGroupLeaders[0]);
  const handleChangeInfoPersident = (index: number) => {
    if (index > 0) {
      setChairPersion(true);
      setDataPersident(data[0]);
      setInfoPersident(introduceGroupLeaders[0]);
    } else {
      setChairPersion(false);
      setDataPersident(data[1]);
      setInfoPersident(introduceGroupLeaders[1]);
    }
  };
  return (
    <div>
      <Banner typeBanner="INTRO" />
      <Breadcrumb listBreads={listBreads} />
      <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5 lg:py-88 py-10 flex flex-col">
        <div className="flex flex-wrap gap-5 items-center  md:justify-between pb-4 border-b border-border">
          <p className="lg:text-40 text-3xl font-semibold text-center lg:max-w-[60%]">
            {t("chair_man")}
          </p>
          <div className="flex flex-wrap gap-y-6 items-center ">
            <Button
              onClick={() => handleChangeInfoPersident(1)}
              color={isChairPersion ? "primary" : "normal"}
              text="chair_perssion"
              className={
                "px-6 py-3 !w-fit " +
                (isChairPersion ? "" : "!font-normal !border-none")
              }
            />
            <Button
              color={!isChairPersion ? "primary" : "normal"}
              text="chair_ps_and_manager_director"
              className={
                "px-6 py-3 !w-fit " +
                (!isChairPersion ? "" : "!font-normal !border-none")
              }
              onClick={() => handleChangeInfoPersident(0)}
            />
          </div>
        </div>

        <div>
          <InfoPerson data={persident} />
        </div>
        <div>
          <LevelOfPerson title="Giáo dục" data={infoPersident.education} />
          <LevelOfPerson
            title="Kinh nghiệm chính"
            data={infoPersident.experiens}
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
