import React, { useEffect, useState } from "react";
import TitlePage from "../../../components/TitlePage";
import Breadcrumb from "../../../components/Breadcrumb";
import Banner from "../../../components/Banner";
import { listBreads, listPartnerFake } from "../../../utils/common";
import DropdownSelect from "../../../components/DropdownSelect";
import { InputElement } from "../../../components/InputElement";
import PartnerMapItem from "./component/PartnerMapItem";
import { partnerService } from "../../../services/partnerService";
import {
  PartnerCompanies,
  PartnerCompanyType,
} from "../../../types/PartnerType";
import Loading from "../../Loading";
import NoContent from "../../NoContent";

const Partner = () => {
  const [linkMap, setLinkMap] = useState<string>(listPartnerFake[0].linkMap);
  const [loading, setLoading] = useState<boolean>(false);
  const [partners, setPatners] = useState<PartnerCompanyType[]>([]);

  const getListPartnerCompanies = async () => {
    try {
      setLoading(true);
      const { total, data } = await partnerService.getPartnersCompany();
      setPatners(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListPartnerCompanies();
  }, []);
  return (
    <div>
      <Banner typeBanner="PARTNER" />
      <Breadcrumb listBreads={listBreads} />
      {/* {loading ? (
        <Loading />
      ) : partners.length === 0 ? (
        <NoContent />
      ) : ( */}
      <div className="sc1800:px-300 xl:px-[155px] sm:px-100 px-5 lg:py-88 py-10">
        <TitlePage text={"title_list_partner"} />
        <div className="">
          <div className="grid grid-cols-6 gap-6 mb-6 h-full">
            <div className="2xl:col-span-3 col-span-6">
              <InputElement placeholder="Tìm kiếm đối tác" reSearch={true} />
            </div>

            <DropdownSelect
              name="Địa điểm"
              className="w-full xl:col-span-1 md:col-span-2 col-span-6"
            />
            <DropdownSelect
              name="Đối tác"
              className="w-full xl:col-span-1 md:col-span-2 col-span-6"
            />
            <DropdownSelect
              name="Sản phấm"
              className="w-full xl:col-span-1 md:col-span-2 col-span-6"
            />
          </div>
          <div className="shadow-normal bg-white p-4 grid lg:grid-cols-3 grid-cols-1 xl:h-[900px] lg:h-600 h-auto  overflow-hidden">
            <div className="lg:max-h-full lg:overflow-y-scroll hidden-scroll">
              <div className="pb-5 lg:h-auto w-full lg:block flex gap-6 lg:overflow-hidden overflow-x-scroll  lg:mb-0 mb-10">
                {listPartnerFake.map((partner, index) => {
                  return (
                    <div key={index} className="lg:w-full xs:w-1/2 w-full">
                      <PartnerMapItem
                        onChangeLinkMap={() => setLinkMap(partner.linkMap)}
                        item={partner}
                        className={index != 0 ? "border-b border-border" : ""}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-2 lg:h-full h-600 ">
              <iframe
                className="w-full h-full"
                src={linkMap}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Partner;
