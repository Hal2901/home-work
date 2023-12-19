import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useConfirmModal } from "../../../hooks/useConfirmModal";
import InputUploadFile from "../../../components/InputUploadFile";
import ImagePreview from "../../../components/ImagePreview";
import { uploadService } from "../../../services/uploadService";
import { bannerService } from "../../../services/bannerService";
import { IMAGE_URL } from "../../../utils/constants";



interface BannerObj {
  title: string 
  type: string
  limit: number
  list: {
    [id: number]: {
      id: number
      url: string
      isBlob: boolean

      // isBlob: boolean
      // file: File
    }
  }
}

interface CacheBannerManagement {
  mapEnum: {
    [enumerate: string]: BannerObj["list"]
  }
  banners: {
    homeBanner: BannerObj,
    productDetailBanner: BannerObj,
    solutionBanner: BannerObj,
    documentsBanner: BannerObj,
    policyBanner: BannerObj,

    certificationBanner: BannerObj,
    videoBanner: BannerObj,
    caseStudyBanner: BannerObj
    trainingBanner: BannerObj,

    partnerBanner: BannerObj,
    registrationPartnershipBanner: BannerObj,
    warrantyCertificateBanner: BannerObj,
    introductionBanner: BannerObj,
    introductionVnBanner: BannerObj,
    history: BannerObj,
    teamMember: BannerObj,
    news: BannerObj,
    contacts: BannerObj,
    sportTournament: BannerObj
  }
}


const BannerManagement = () => {
  const { t } = useTranslation();
  const { showMessage, showConfirm } = useConfirmModal();


  const [cache] = useState<CacheBannerManagement>({
    mapEnum: {},
    banners: {
      homeBanner: {title: "banner_home", type: "HOME",limit: 5, list: {}},
      productDetailBanner: {title: "banner_product_detail", type: "PRODUCT",limit: 1, list: {}},
      solutionBanner: {title: "banner_solution", type: "SOLUTION",limit: 1, list: {}},
      documentsBanner: {title: "banner_document", type: "DOC",limit: 1, list: {}},
      policyBanner: {title: "banner_policy", type: "POLICY",limit: 1, list: {}},
      certificationBanner: {title: "banner_certificate", type: "CERTIFICATE", limit: 1, list: {}},
      videoBanner: {title: "banner_video", type: "VIDEO", limit: 1, list: {}},
      caseStudyBanner: {title: "banner_case_study", type: "STUDY", limit: 1, list: {}},
      trainingBanner: {title: "banner_training", type: "TRAINING", limit: 1, list: {}},

      partnerBanner: {title: "banner_partner", type: "PARTNER", limit: 1, list: {}},
  
      registrationPartnershipBanner: {title: "banner_registration_partnership", type: "PARTNER_REGISTER", limit: 1, list: {}},
      warrantyCertificateBanner: {title: "banner_warranty_certificate", type: "GUARANTEE",limit: 1, list: {}},

      introductionBanner: {title: "banner_introduction", type: "INTRO", limit: 1, list: {}},
      introductionVnBanner: {title: "banner_introduction_vn", type: "CABLE", limit: 1, list: {}},
      history: {title: "banner_history", type: "HISTORY", limit: 1, list: {}},
      teamMember: {title: "banner_team_member", type: "EMPLOYEE", limit: 1, list: {}},
      news: {title: "banner_news", type: "NEWS", limit: 1, list: {}},
      contacts: {title: "banner_contacts", type: "CONTACT", limit: 1, list: {}},
      sportTournament: {title: "banner_sport_tourament", type: "TOURNAMENT", limit: 1, list: {}}
    }
  });
  const cleanData = () => {
    Object.values(cache.banners).map((entry) => {
      entry.list = {}
      cache.mapEnum[entry.type] = entry.list;
    })
  }

  const [triggerer, setTriggerer] = useState(false);

  const getData = () => {
    cleanData();
    console.log(cache);
    
    // Call Api
    bannerService.getBanners()
    .then((result) => {
      result.map((val) => {
        cache.mapEnum[val.type][val.id] = {
          id: val.id,
          url: `${IMAGE_URL}${val.link}`,
          isBlob: false
        }
      })
      setTriggerer(!triggerer);
    })
  }


  // Chay lan dau
  useEffect(() => {
    getData();
  },[true])


  // Handle upload banner image
  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>, bannerObj: BannerObj) => {
    // Validation
    if (Object.keys(bannerObj.list).length >= bannerObj.limit) {
      showMessage({
        message: `Banner tối đa ${bannerObj.limit} ảnh`,
        typeMessage: "warning",
      });
      return;
    }
    const file = e.target.files![0];
    const regexFile = /(jpg|png|jpeg)/gi;
    const maxSizeFile = 5120000;
    if (!regexFile.test(file.type)
      // && file.size <= maxSizeFile
    ) {
      showMessage({
        message: "File không đúng định dạng hoặc dung lượng quá lớn",
        typeMessage: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // Post api (add banner image)
    // Run sequentially
    (async () => {
      let linkMedia = "";
      await uploadService.uploadImages(formData).then((result) => {
        console.log(result);
        linkMedia = result[0]?.linkMedia? result[0].linkMedia : linkMedia;
      })

      await bannerService.uploadBanner(bannerObj.type,{
        type: bannerObj.type,
        link: linkMedia
      }).then((result) => {
        const url = URL.createObjectURL(file); // For current session
        bannerObj.list[result.id] = {
          id: result.id,
          url: url,
          isBlob: true
        }
        setTriggerer(!triggerer);
        // getData();
      })
    })().catch(() => {alert("that bai")})

  };

  // handleDeleteBanner Image
  const handleDeleteImage = (id: number, bannerObj: BannerObj) => {
    bannerService.deleteBanner(id).then(() => {
      const target = bannerObj.list[id];
      target.isBlob && URL.revokeObjectURL(target.url);

      delete bannerObj.list[id];
      setTriggerer(!triggerer);

      // getData();
    }).catch(() => {
      alert("that bai");
    })
  };


  return (
    <div>
      <div className="mt-5">
        {Object.entries(cache.banners).map((entry, index) => {
          const bannerType:BannerObj = entry[1];
          return (
            <div className="mb-[30px]">
              <p className="xl:text-2xl text-lg font-semibold mb-22">
                {t(bannerType.title)}
              </p>
              <div className="mb-2 flex items-center flex-wrap">
                <p className="text-sm font-normal md:mr-[192px]">
                  Tải ảnh lên <span className="text-danger">*</span> (tối đa {bannerType.limit} ảnh)
                </p>
                {Object.keys(bannerType.list).length > 0 && (
                  <p className="text-sm font-normal">Hình ảnh đã tải lên</p>
                )}
              </div>
              <div className="flex items-center gap-6 flex-wrap">
                <InputUploadFile
                  onChange={(e) => {handleUploadImage(e,bannerType)}}
                  className="ssm:w-[350px] w-auto"
                />

                {bannerType.list &&
                  Object.entries(bannerType.list ).map((entry, index) => {
                    const item = entry[1];

                    return (
                      <ImagePreview
                        key={index}
                        imagePreview={item.url}
                        onDelete={() => {
                          handleDeleteImage(item.id,bannerType);
                        }}
                      />
                    );
                  })
                }

              </div>
            </div>
          )
        })}

      </div>
    </div>
  );
};

export default BannerManagement
