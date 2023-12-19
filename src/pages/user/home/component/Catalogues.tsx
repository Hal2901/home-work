import React, { memo } from "react";
import IcDownload from "../../../../assets/icons/IcDowload";

interface PropsItem {
  name: string;
  onDownload: () => void;
}
const CatalogItem = memo(({ name, onDownload }: PropsItem) => {
  return (
    <div className="rounded-10 border border-border h-12 flex items-center justify-between font-medium pl-6">
      {name}
      <div
        className="w-12 h-full bg-main flex items-center justify-center rounded-r-10 cursor-pointer"
        onClick={() => onDownload()}
      >
        <IcDownload />
      </div>
    </div>
  );
});
const Catalogues = () => {
  const listCataloues = [
    { name: "E-Catalog" },
    { name: "SC S Brochure" },
    { name: "Full Catalog" },
    { name: "D/C Brouchure" },
  ];

  const handleDownloadCatalogue = () => {
    console.log("download catalogue");
  };
  return (
    <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5 py-[45px] ">
      <p className="font-semibold text-[32px] leading-[40px] mb-[32px]">
        LS Simple Catalogue & Brochure
      </p>
      <div className="grid lg:grid-cols-4 xs:grid-cols-2 items-center gap-6">
        {listCataloues.map((cata, index) => {
          return (
            <CatalogItem
              key={index}
              name={cata.name}
              onDownload={handleDownloadCatalogue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Catalogues;
