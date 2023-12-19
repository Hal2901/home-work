import clsx from "clsx";
import { ChangeEvent, memo } from "react";
import { useTranslation } from "react-i18next";
import IcDelete from "../../../../assets/icons/IcDelete";
import IcLabelUploadImg from "../../../../assets/icons/IcLabelUploadImg";
import IcSort from "../../../../assets/icons/IcSort";
import colors from "../../../../common/colors";
import { TextAreaElement } from "../../../../components/TextAreaElement";

interface Props {
  data: any[];
  index: number;
  handleDeleteRow: () => void;
  handleDeleteFileSpecial: () => void;
  handleChangeFile: (
    e: ChangeEvent<HTMLInputElement>,
    typeFile: "img" | "special"
  ) => void;
  handleChangeInputRow: (
    e: ChangeEvent<HTMLTextAreaElement>,
    indexCol: number
  ) => void;
}

const VariantItem = memo(
  ({
    data,
    index,
    handleDeleteRow,
    handleChangeFile,
    handleChangeInputRow,
    handleDeleteFileSpecial,
  }: Props) => {
    const { t } = useTranslation();
    return (
      <div
        className={clsx(" flex  min-w-[1440px] h-auto relative shadow-sm", {
          "bg-whiteFAFAFA": index % 2 == 0,
          "bg-white": index % 2 != 0,
        })}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -right-8 cursor-pointer"
          onClick={handleDeleteRow}
        >
          <IcDelete />
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex items-center justify-between text-white font-medium min-h-[100px] p-4 showCategory w-200 relative",
                {
                  "!w-[150px]": index === 0,
                  "!w-[260px]": index === 1,
                  "!w-[540px]": index === 2,
                  "!w-[290px]": index + 1 === data.length,
                }
              )}
            >
              {index === 0 && (
                <div className="w-full">
                  <label className="flex h-full w-full border border-border flex-col items-center justify-center p-4 cursor-pointer">
                    {item?.value ? (
                      <img src={item?.value} alt="" className="w-full h-16" />
                    ) : (
                      <>
                        <IcLabelUploadImg color={colors.text_main} />
                        <p className="text-defaultText">{t("upload_img")}</p>
                      </>
                    )}
                    <input
                      type="file"
                      hidden
                      onChange={(e) => handleChangeFile(e, "img")}
                    />
                  </label>
                </div>
              )}
              {index > 0 && index + 1 < data.length && (
                <div className="w-full">
                  <TextAreaElement
                    placeholder="input_description"
                    name="description"
                    value={item?.value ?? ""}
                    className="border-none font-normal max-w-full !bg-transparent"
                    onChange={(e) => handleChangeInputRow(e, index)}
                  />
                </div>
              )}
              {index + 1 === data.length && (
                <div className="w-full">
                  {item?.value ? (
                    <div className="flex items-center justify-between gap-1 cursor-pointer">
                      <IcLabelUploadImg />
                      <p className="text-defaultText">{item.value}</p>
                      <div onClick={handleDeleteFileSpecial}>
                        <IcDelete />
                      </div>
                    </div>
                  ) : (
                    <label className="flex h-12 rounded-10 w-full border border-main text-main items-center justify-center p-4 cursor-pointer">
                      <IcSort />
                      {t("upload_file_special")}
                      <input
                        type="file"
                        hidden
                        onChange={(e) => handleChangeFile(e, "special")}
                      />
                    </label>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

export default VariantItem;
