import { useNavigate } from "react-router-dom";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import { useHandleImage } from "../../../hooks/useHandleImage";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { PartnerCompanyType } from "../../../types/PartnerType";
import * as Yup from "Yup";
import GroupButton from "../../../components/admin/GroupButton";
import { InputElement } from "../../../components/InputElement";
import TextError from "../../../components/TextError";
import ImagePreview from "../../../components/ImagePreview";
import InputUploadFile from "../../../components/InputUploadFile";
import LabelInput from "../../../components/LabelInput";
import clsx from "clsx";
import { uploadService } from "../../../services/uploadService";
import { partnerService } from "../../../services/partnerService";
import NotFound from "../../NotFound";
import { Button } from "../../../components/Button";
import { getUrlImage } from "../../../utils/constants";

interface Props {
  type: "view" | "add" | "edit";
}

const initialPartnerCompany: PartnerCompanyType = {
  id: "",
  lsi: "",
  vat: "",
  link: "",
  email: "",
  phone: "",
  map: "",
  namePartner: "",
  address: "",
  nameContact: ""
}


const EditPartner = ({type}:Props) => {
  const navigator = useNavigate();
  const [loaded,setLoaded] = useState(false);
  

  // Formik
  const formik = useFormik<{ partner: PartnerCompanyType }>({
    initialValues: {
      partner: {...initialPartnerCompany},
    },
    validationSchema: Yup.object({
      partner: Yup.object({
        // distributor: Yup.string().required("require.empty").max(255, "max"),
        // lsi: Yup.string().required("require.empty").max(255, "max"),

        vat: Yup.string().required("require.empty").max(255, "max"),
        email: Yup.string().required("require.empty").max(525, "max"),
        phone: Yup.string().required("require.empty").max(525, "max"),
        map: Yup.string().required("require.empty").max(525, "max"),
        namePartner: Yup.string().required("require.empty").max(525, "max"),
        address: Yup.string().required("require.empty").max(525, "max"),
        nameContact: Yup.string().required("require.empty").max(525, "max"),
        link: Yup.string().required("require.empty"),
      }),
    }),
    onSubmit: async (value) => { 
      try {
        switch(type){
          case "add": {
            if (!file) {
              return;
            }
            const formData = new FormData();
            formData.append("file",file);
            const linkImage = await uploadService.uploadImages(formData)
            value.partner.link = linkImage[0].linkMedia;
            await partnerService.addPartnerCompany(value.partner);
            navigator(-1);
            break;
          }
          case "edit": {
            const id = window.location.pathname.split("/").reverse()[0];
            value.partner.id = id;
            await partnerService.addPartnerCompany(value.partner);
            navigator(-1);
            break;
          }
        }
      } catch (e) {
        alert("that bai");
      }
    },
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange: handleChangeInput,
    handleSubmit,
    setFieldValue,
    setValues,
  } = formik;


  // Chay lan dau
  useEffect(() => {
    switch(type) {
      case 'add':
        setLoaded(true);
        break;
      case 'view':
      case 'edit':
        const id = window.location.pathname.split("/").reverse()[0];
        partnerService.getPartnerCompanyDetail(id)
        .then( (result:PartnerCompanyType) => {
          setPlainFiles([{
            id: 'id',
            link: getUrlImage(result.link)
          }])
          setFieldValue("partner",result)
          setLoaded(true);
        })
      default:
        break;
    }
  },[])




  // Handle change img (buggy)
  const {
    preViewImage,
    handleChange,
    handleDelete,
    handleRemoveByIndex,
    file,
    plainFiles,
    setPlainFiles
  } = useHandleImage("", []);
  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (plainFiles.length >= 1) {
      return toast.error("Tải tối đa 1 ảnh.");
    }
    handleChange(e);
  };
  useEffect(() => {
    const value = values.partner;
    if (file) {
      value.link = preViewImage;
    }
    setFieldValue("partner", value);
  }, [preViewImage]);
  // Handle text input value
  const handleChangeKeyValue = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof typeof values.partner 
  ) => {
    if (type === "view") {
      return;
    }

    values.partner[field] = e.target.value;
    setValues(values); // Trigger update
  }
  // Button Group handler
  const handleCancel = () => {
    navigator(-1);
  };


  return loaded ? (
    <div>
      <TitleAdminPage text={clsx(
        type === "add" && "create_partner",
        type === "edit" && "edit_partner"
        )} 
      />
      <div className="my-8"></div>
      <div>
        <div className="flex flex-wrap gap-6 items-center mb-6">

          { type != "view" && <div>
            <LabelInput text="upload_img" subText="(Tối đa 1 ảnh)" />
            <InputUploadFile onChange={handleChangeImg} />
             {errors.partner?.link && touched.partner?.link && (
              <TextError
                text={errors.partner?.link}
                option={{ name: "ảnh" }}
              />
              )}
          </div> }
          {plainFiles.length > 0 && (
            <div>
              <LabelInput text="image_uploaded" />
              <div className="flex flex-wrap items-center gap-6">
                {plainFiles.map((plainImg, index) => {
                  return type != 'view'?
                    <ImagePreview
                      key={index}
                      imagePreview={plainImg.link ?? ""}
                      onDelete={() => handleRemoveByIndex(index)}
                    />: 
                    <img className="h-[190px] w-[340px] rounded-[4px] overflow-hidden relative group border"
                      src={plainImg.link}></img>;
                })}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">

          <div>
            <LabelInput text="distributor" />
            <InputElement
              placeholder="input_distributor"
              // value={values.partner.distributor}
              // onChange={(e: any) => handleChangeKeyValue(e,"distributor")}
              disabled={type === "view"}
            />
            {/* errors.partner?.distributor && touched.partner?.distributor && (
              <TextError
                text={errors.partner?.distributor}
                option={{ name: "tên nhà phân phối", length: 255 }}
              />
            )*/}
          </div>

          <div>
            <LabelInput text="name_partner" />
            <InputElement
              placeholder="input_name_partner"
              value={values.partner.namePartner}
              onChange={(e: any) => handleChangeKeyValue(e, "namePartner")}
              disabled={type === "view"}
            />
            {errors.partner?.namePartner && touched.partner?.namePartner && (
              <TextError
                text={errors.partner?.namePartner}
                option={{ name: "tên đối tác", length: 255 }}
              />
            )}
          </div>

          <div>
            <LabelInput text="address" />
            <InputElement
              placeholder="input_address"
              value={values.partner.address}
              onChange={(e: any) => handleChangeKeyValue(e, "address")}
              disabled={type === "view"}
            />
            {errors.partner?.address && touched.partner?.address && (
              <TextError
                text={errors.partner?.address}
                option={{ name: "địa chỉ", length: 255 }}
              />
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <LabelInput text="tax_number" />
              <InputElement
                placeholder="input_tax_number"
                value={values.partner.vat}
                onChange={(e: any) => handleChangeKeyValue(e, "vat")}
                disabled={type === "view"}
              />
              {errors.partner?.vat && touched.partner?.vat && (
                <TextError
                  text={errors.partner?.vat}
                  option={{ name: "mã số thuế", length: 255 }}
                />
              )}
            </div>

            <div>
              <LabelInput text="contact_person" />
              <InputElement
                placeholder="input_contact_person"
                value={values.partner.nameContact}
                onChange={(e: any) => handleChangeKeyValue(e, "nameContact")}
                disabled={type === "view"}
              />
              {errors.partner?.nameContact && touched.partner?.nameContact && (
                <TextError
                  text={errors.partner?.nameContact}
                  option={{ name: "người liên hệ", length: 255 }}
                />
              )}
            </div>

            <div>
              <LabelInput text="partner_phone" />
              <InputElement
                placeholder="input_phone_number"
                value={values.partner.phone}
                onChange={(e: any) => handleChangeKeyValue(e, "phone")}
                disabled={type === "view"}
              />
              {errors.partner?.phone && touched.partner?.phone && (
                <TextError
                  text={errors.partner?.phone}
                  option={{ name: "số điện thoại", length: 255 }}
                />
              )}
            </div>

            <div>
              <LabelInput text="email" />
              <InputElement
                placeholder="input_email"
                value={values.partner.email}
                onChange={(e: any) => handleChangeKeyValue(e, "email")}
                disabled={type === "view"}
              />
              {errors.partner?.email && touched.partner?.email && (
                <TextError
                  text={errors.partner?.email}
                  option={{ name: "email", length: 255 }}
                />
              )}
            </div>
          </div>

          <div>
            <LabelInput text="google_map_link" />
            <InputElement
              placeholder="input_google_map_link"
              value={values.partner.map}
              onChange={(e: any) => handleChangeKeyValue(e, "map")}
              disabled={type === "view"}
            />
            {errors.partner?.map && touched.partner?.map && (
              <TextError
                text={errors.partner?.map}
                option={{ name: "link google map", length: 255 }}
              />
            )}
          </div>
        </div>

        <div className="my-8">
          {type != "view"? 
            <GroupButton onCancel={handleCancel} onSubmit={handleSubmit} />:

            <div className="flex items-center gap-6 justify-end">
              <Button
                color="empty"
                text={"cancel_btn"}
                className="px-6 py-3 !w-fit"
                onClick={handleCancel}
              />
            </div>
          }
        </div>
      </div>
    </div>
  ): <NotFound/>;
};


export default EditPartner;
