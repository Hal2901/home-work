import React, { ChangeEvent, useContext, useEffect } from "react";
import { ModalContext } from "../../../../context";
import TitleAdminPage from "../../../../components/admin/TitleAdminPage";
import LabelInput from "../../../../components/LabelInput";
import { InputElement } from "../../../../components/InputElement";
import { useFormik } from "formik";
import * as Yup from "Yup";
import TextError from "../../../../components/TextError";
import GroupButton from "../../../../components/admin/GroupButton";
import { TextAreaElement } from "../../../../components/TextAreaElement";
import { PartnerType } from "../../../../types/PartnerType";
import { partnerService } from "../../../../services/partnerService";
interface Props {
  type: "view" | "add" | "edit"
  data: PartnerType
  refresh: () => void
}

const initialPartner = {
  id: undefined,
  name: "",
  imageLink: "",
  description: "",
  categoryChild: [
    {
      id: undefined,
      name: "",
    },
  ],
};
const ShowPartnerRequest  = ({ type, data , refresh}: Props) => {
  const { closeModal } = useContext(ModalContext);
  const temp = {
    id: data.id,
    feedback: data.feedback,
    company: {...data.company},
    person: {...data.person}
  }

  // FORMIK
  const formik = useFormik<{ partner: PartnerType }>({
    initialValues: {
      partner: type === "add"? data: temp,
    },
    validationSchema: Yup.object({
      partner: Yup.object({
        // feedback: Yup.string().required("require.empty").max(255, "max"),
        company: Yup.object({
          nameCompany: Yup.string().required("require.empty").max(255, "max"),
          // representative: Yup.string().required("require.empty").max(255, "max"),
          // web: Yup.string().required("require.empty").max(255, "max"),
          nation: Yup.string().required("require.empty").max(255, "max"),
          city: Yup.string().required("require.empty").max(255, "max")
          // address: Yup.string().required("require.empty").max(255, "max")
        }),
        person: Yup.object({
          namePerson: Yup.string().required("require.empty").max(255, "max"),
          phone: Yup.string().required("require.empty").max(255, "max"),
          // fax: Yup.string().required("require.empty").max(255, "max"),
          email: Yup.string().required("require.empty").max(255, "max"),
          position: Yup.string().required("require.empty").max(255, "max"),
          part: Yup.string().required("require.empty").max(255, "max")
        })
      })
    }),
    onSubmit: async (value) => {
      value.partner.feedback = value.partner.feedback? value.partner.feedback : "";
      switch(type) {
        case "add":
          break;
        case "edit":
          partnerService.editPartner(value.partner)
          .then(() => {
            refresh();
            closeModal();
          })
          .catch(() => {
            alert("that bai")
          })
          break;
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





  const handleChangeFeedback = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (type === "view") {
      return;
    }
    const value = values.partner;
    value.feedback = e.target.value;
    setFieldValue("partner", value);
  };
  const handleChangeKeyValuePerson = (
    e: ChangeEvent<HTMLInputElement>,
    name: keyof typeof values.partner.person 
  ) => {
    if (type === "view") {
      return;
    }
    const value = values.partner.person;
    value[name] = e.target.value;
    setFieldValue("partner.person", value);
  };
  const handleChangeKeyValueCompany = (
    e: ChangeEvent<HTMLInputElement>,
    name: keyof typeof values.partner.company 
  ) => {
    if (type === "view") {
      return;
    }
    const value = values.partner.company;
    value[name] = e.target.value;
    setFieldValue("partner.company", value);
  };




  return (
    <div className="w-[60vw] overflow-y-scroll hidden-scroll rounded-10 bg-white py-10 px-6">
      <TitleAdminPage
        className="!text-[32px] leading-[40px] mb-10 text-center uppercase !w-full"
        text={"request_partner_replied"}
      />
      <div className="flex flex-col gap-6 mb-6">
        <TitleAdminPage text={"company_information"} />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <LabelInput text="company_name" />
            <InputElement
              placeholder="input_company_name"
              value={values.partner.company?.nameCompany}
              onChange={(e: any) => handleChangeKeyValueCompany(e, "nameCompany")}
            />
            {errors.partner?.company?.nameCompany && touched.partner?.company?.nameCompany && (
              <TextError
                text={errors.partner.company.nameCompany}
                option={{ name: "tên công ty", length: 255 }}
              />
            )}
          </div>

          <div>
            <LabelInput text="repesen_name" isRequire={false} />
            <InputElement
              placeholder="input_repesen_name"
              value={values.partner.company?.representative}
              onChange={(e: any) => handleChangeKeyValueCompany(e, "representative")}
            />
          </div>

          <div>
            <LabelInput text="network_page" isRequire={false} />
            <InputElement
              placeholder="input_network_page"
              value={values.partner.company?.web}
              onChange={(e: any) => handleChangeKeyValueCompany(e, "web")}
            />
          </div>

          <div>
            <LabelInput text="country" />
            <InputElement
              placeholder="input_country"
              value={values.partner.company?.nation}
              onChange={(e: any) => handleChangeKeyValueCompany(e, "nation")}
            />
            {errors.partner?.company?.nation && touched.partner?.company?.nation && (
              <TextError
                text={errors.partner.company.nation}
                option={{ name: "quốc gia", length: 255 }}
              />
            )}
          </div>


          <div>
            <LabelInput text="city" />
            <InputElement
              placeholder="input_city"
              value={values.partner.company?.city}
              onChange={(e: any) => handleChangeKeyValueCompany(e, "city")}
            />
            {errors.partner?.company?.city && touched.partner?.company?.city && (
              <TextError
                text={errors.partner.company.city}
                option={{ name: "thành phố", length: 255 }}
              />
            )}
          </div>

          <div>
            <LabelInput text="address_company" isRequire={false} />
            <InputElement
              placeholder="input_address_company"
              value={values.partner.company?.address}
              onChange={(e: any) => handleChangeKeyValueCompany(e, "address")}
            />
          </div>
        </div>




        <TitleAdminPage text={"info_individual"} />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <LabelInput text="name" />
            <InputElement
              placeholder="input_full_name"
              value={values.partner.person?.namePerson}
              onChange={(e: any) => handleChangeKeyValuePerson(e, "namePerson")}
            />
            {errors.partner?.person?.namePerson && touched.partner?.person?.namePerson && (
              <TextError
                text={errors.partner.person.namePerson}
                option={{ name: "họ và tên", length: 255 }}
              />
            )}
          </div>
          <div>
            <LabelInput text="part_name" />
            <InputElement
              placeholder="input_part_name"
              value={values.partner.person?.part}
              onChange={(e: any) => handleChangeKeyValuePerson(e, "part")}
            />
            {errors.partner?.person?.part && touched.partner?.person?.part && (
              <TextError
                text={errors.partner.person.part}
                option={{ name: "bộ phận", length: 255 }}
              />
            )}
          </div>
          <div>
            <LabelInput text="position" />
            <InputElement
              placeholder="input_position"
              value={values.partner.person?.position}
              onChange={(e: any) => handleChangeKeyValuePerson(e, "position")}
            />
            {errors.partner?.person?.position && touched.partner?.person?.position && (
              <TextError
                text={errors.partner.person.position}
                option={{ name: "vị trí", length: 255 }}
              />
            )}
          </div>
          <div>
            <LabelInput text="phone_number" />
            <InputElement
              placeholder="input_phone_number"
              value={values.partner.person?.phone}
              onChange={(e: any) => handleChangeKeyValuePerson(e, "phone")}
            />
            {errors.partner?.person?.phone && touched.partner?.person?.phone && (
              <TextError
                text={errors.partner.person.phone}
                option={{ name: "số điện thoại", length: 255 }}
              />
            )}
          </div>
          <div>
            <LabelInput text="fax_number" isRequire={false} />
            <InputElement
              placeholder="input_fax_number"
              value={values.partner.person?.fax}
              onChange={(e: any) => handleChangeKeyValuePerson(e, "fax")}
            />
          </div>
          <div>
            <LabelInput text="email" />
            <InputElement
              placeholder="input_email"
              value={values.partner.person?.email}
              onChange={(e: any) => handleChangeKeyValuePerson(e, "email")}
            />
            {errors.partner?.person?.email && touched.partner?.person?.email && (
              <TextError
                text={errors.partner.person.email}
                option={{ name: "email", length: 255 }}
              />
            )}
          </div>
        </div>

        <TitleAdminPage text={"customer_feedback_replied"} />
        <div>
          <TextAreaElement
            placeholder="input_content"
            value={values.partner?.feedback}
            onChange={(e: any) => handleChangeFeedback(e)}
          />
        </div>

      </div>


      {type != "view" && <div>
        <GroupButton
          onCancel={closeModal}
          onSubmit={handleSubmit}
          disable={isSubmitting}
        />
      </div>}
    </div>
  );
};

export default ShowPartnerRequest 