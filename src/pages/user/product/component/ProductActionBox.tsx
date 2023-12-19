import React, { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/Button";
import IcDownload from "../../../../assets/icons/IcDowload";
import colors from "../../../../common/colors";
import IcCoppy from "../../../../assets/icons/IcCoppy";

export interface Props {
  icon: ReactNode;
  text: string;
  onCoppy: () => void;
  onDownload: () => void;
}
const ProductActionBox = memo(({ icon, text, onCoppy, onDownload }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full border border-border rounded-[4px] p-4 h-88 flex items-center justify-between bg-whiteFAFAFA">
      <div className="flex items-center gap-2">
        <div className="rounded-1/2 bg-white  w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <div className="font-medium">{t(text)}</div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <Button
          color="normal"
          text="download"
          className="!text-xs !min-w-[90px] !font-normal !text-defaultText px-2 py-1 h-6 rounded-[4px] bg-white !w-fit"
          image={<IcDownload color={colors.gray01} width={16} height={16} />}
          onClick={onDownload}
        />
        <Button
          color="normal"
          text="download"
          className="!text-xs !min-w-[90px] !font-normal !text-defaultText px-2 py-1 h-6 rounded-[4px] bg-white !w-fit"
          image={<IcCoppy color={colors.gray01} />}
          onClick={onCoppy}
        />
      </div>
    </div>
  );
});

export default ProductActionBox;
