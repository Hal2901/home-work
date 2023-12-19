import React, { ChangeEvent, memo } from "react";
import { useTranslation } from "react-i18next";
import IcUploadImgThin from "../../../../assets/icons/IcUploadImgThin";
import LabelInput from "../../../../components/LabelInput";
import { InputElement } from "../../../../components/InputElement";
import IcDelete from "../../../../assets/icons/IcDelete";
import TextError from "../../../../components/TextError";

interface Props {
  linkFile?: string;
  linkPath?: string;
  error?: string;
  handleChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangePathLink: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteFile: () => void;
}
const UploadFileSupportItem = memo(
  ({
    linkFile,
    linkPath = "",
    error,
    handleChangeFile,
    handleChangePathLink,
    handleDeleteFile,
  }: Props) => {
    const { t } = useTranslation();
    return (
      <div className="grid grid-cols-2 gap-6 ">
        <div>
          <p className="mb-1 font-medium"> {t("upload_file_pr")}</p>
          <label className="flex h-[150px] border-[2px] border-dashed flex-col items-center justify-center rounded-10">
            <div className="w-11 h-11 rounded-1/2 bg-border flex items-center justify-center mb-3">
              <IcUploadImgThin />
            </div>
            <p className="text-active">{t("click_to_upload")}</p>
            <input type="file" hidden onChange={handleChangeFile} />
          </label>
        </div>
        <div className="h-full flex flex-col gap-1">
          <div>
            <LabelInput text="file_uploaded" isRequire={false} />
            <div className="flex items-center justify-between gap-6 h-16 bg-whiteFAFAFA rounded-10 border px-4">
              {linkFile ? (
                <>
                  <div>
                    <IcUploadImgThin />
                  </div>
                  <div onClick={handleDeleteFile}>
                    <IcDelete />
                  </div>
                </>
              ) : (
                t("no_file")
              )}
            </div>
          </div>
          <div>
            <LabelInput text="link" />
            <InputElement
              placeholder="input_link"
              onChange={handleChangePathLink}
              name="name"
              value={linkPath}
              // onChange={(e: any) => handleChangeKeyValue(e, "name")}
            />
          </div>
          {error && <TextError text={error} />}
        </div>
      </div>
    );
  }
);

export default UploadFileSupportItem;
