import clsx from "clsx";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import IcImageAbsolute from "../../../../assets/icons/IcImageAbsolute";

interface Props {
  data: {
    title?: string;
    imageLink: string;
    messages: string;
  };
}
const InfoPerson = memo(({ data }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full grid 2xl:grid-cols-[490px_1fr] lg:grid-cols-[380px_1fr] grid-cols-1  relative gap-16 pb-100 lg:pt-200 pt-14">
      <div
        className={clsx(
          "lg:block hidden absolute -z-[1] top-[120px] -right-20 "
        )}
      >
        <IcImageAbsolute />
      </div>
      <div className="2xl:h-600 sm:h-500 h-auto mt-10 bg-main">
        <img
          src={data?.imageLink}
          className="w-full h-full lg:object-cover object-contain xs:translate-x-10 xs:-translate-y-10 bg-white"
          alt=""
        />
      </div>
      <div className="h-fit flex justify-center">
        <div className="p-10 bg-white rounded-[4px] shadow-normal flex flex-col gap-6">
          <p className="lg:text-40 text-3xl font-semibold">
            {t("message_from_persient")}
          </p>
          <p className="text-main text-xl">{data?.title}</p>
          <p>{data?.messages}</p>
        </div>
      </div>
    </div>
  );
});

export default InfoPerson;
