import React, { memo } from "react";
import { variationTh } from "../../../../utils/common";
import { productCard } from "../../../../assets/images";
import { Button } from "../../../../components/Button";
import IcDownload from "../../../../assets/icons/IcDowload";
import IcPlusCircle from "../../../../assets/icons/IcPlusCircle";
import colors from "../../../../common/colors";
import { useTranslation } from "react-i18next";

export interface DataTable {
  info: {
    imageLink: string;
    title: string;
    description: string;
  };
  availability: string;
  category: string;
  type: string;
  enviroment: string;
  typeCap: string;
}
export interface PropsTable {
  data: DataTable[];
  handleDownload: () => void;
  handlePlus: () => void;
}
const TableProductVariation = memo(
  ({ data, handleDownload, handlePlus }: PropsTable) => {
    const { t } = useTranslation();
    return (
      <table className="w-full border border-border border-collapse table-variation_pr min-w-[1200px]">
        <thead>
          <tr>
            {variationTh.map((item, index) => {
              return <th key={index}>{t(item)}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex justify-between items-center">
                      <img
                        src={item.info.imageLink ?? productCard}
                        alt=""
                        className="border border-border w-[120px] h-16"
                      />
                      <div className="flex flex-col justify-between w-[calc(100%_-130px)]">
                        <p className="text-main text-sm font-medium">
                          {item.info.title}
                        </p>
                        <p className="line-clamp-2 text-xs">
                          {item.info.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{item.availability}</td>
                  <td>{item.category} </td>
                  <td>{item.type} </td>
                  <td>{item.enviroment}</td>
                  <td>{item.typeCap}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        text=""
                        color="normal"
                        className="!min-w-fit !w-12 !h-12"
                        image={<IcDownload color={colors.gray01} />}
                        onClick={handleDownload}
                      />
                      <Button
                        text=""
                        color="normal"
                        className="!min-w-fit !w-12 !h-12"
                        image={<IcPlusCircle color={colors.gray01} />}
                        onClick={handlePlus}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
);

export default TableProductVariation;
