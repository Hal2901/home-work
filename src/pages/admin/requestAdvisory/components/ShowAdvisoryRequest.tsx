import React, { ChangeEvent, useContext, useEffect } from "react";
import { CategoryParent } from "../../../../types/categoriesType";
import { ModalContext } from "../../../../context";
import TitleAdminPage from "../../../../components/admin/TitleAdminPage";
import LabelInput from "../../../../components/LabelInput";
import { InputElement } from "../../../../components/InputElement";
import { useFormik } from "formik";
import * as Yup from "Yup";
import TextError from "../../../../components/TextError";
import GroupButton from "../../../../components/admin/GroupButton";
import { TextAreaElement } from "../../../../components/TextAreaElement";
import { ContactType } from "../../../../types/contactType";
import { contactService } from "../../../../services/contactService";
interface Props {
  data: ContactType
  type: "view" | "add" | "edit"
  refresh: () => void
}

const initialContact: ContactType = {
  fullname: "",
  phone: "",
  email: "",
  address: "",
  content: "",
};
const ShowAdvisoryRequest  = ({ data, type, refresh }: Props) => {
  const { closeModal } = useContext(ModalContext);

  // FORMIK
  const formik = useFormik<{ contact: ContactType }>({
    initialValues: {
      contact: type === "add"? initialContact: {...data},
    },
    validationSchema: Yup.object({
      contact: Yup.object({
        fullname: Yup.string().required("require.empty").max(255, "max"),
        phone: Yup.string().required("require.empty").max(525, "max"),
        email: Yup.string().required("require.empty").max(525, "max"),
        address: Yup.string().required("require.empty").max(525, "max"),
        content: Yup.string().required("require.empty").max(525, "max"),
        feedback: Yup.string().required("require.empty").max(525, "max")
      })

    }),
    onSubmit: async (value) => {
      switch(type) {
        case "add":
          break;
        case "edit":
          contactService.editContact(value.contact)
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



  const handleChangeKeyValue = (
    e: ChangeEvent<HTMLInputElement>,
    name: keyof typeof values.contact 
  ) => {
    if (type === "view") {
      return;
    }

    const value = values.contact;
    value[name] = e.target.value;
    setFieldValue("contact", value);
  };



  return (
    <div className="w-[60vw] max-h-[80vh] overflow-y-scroll hidden-scroll rounded-10 bg-white py-10 px-6">
      <TitleAdminPage
        className="!text-[32px] leading-[40px] mb-10 text-center uppercase !w-full"
        text={"request_advisory_replied"}
      />
      <div className="flex flex-col gap-6 mb-6">
        <TitleAdminPage text={"request_advisory_content"} />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <LabelInput text="full_name" />
            <InputElement
              placeholder="input_full_name"
              value={values.contact.fullname}
              onChange={(e: any) => handleChangeKeyValue(e, "fullname")}
            />
            {errors.contact?.fullname && touched.contact?.fullname && (
              <TextError
                text={errors.contact?.fullname}
                option={{ name: "tên", length: 255 }}
              />
            )}
          </div>
          <div>
            <LabelInput text="phone_number" />
            <InputElement
              placeholder="input_phone_number"
              value={values.contact.phone}
              onChange={(e: any) => handleChangeKeyValue(e, "phone")}
            />
            {errors.contact?.phone && touched.contact?.phone && (
              <TextError
                text={errors.contact?.phone}
                option={{ name: "số điện thoại", length: 255 }}
              />
            )}
          </div>

          <div>
            <LabelInput text="email" />
            <InputElement
              placeholder="input_email"
              value={values.contact.email}
              onChange={(e: any) => handleChangeKeyValue(e, "email")}
            />
            {errors.contact?.email && touched.contact?.email && (
              <TextError
                text={errors.contact?.email}
                option={{ name: "email", length: 255 }}
              />
            )}
          </div>

          <div>
            <LabelInput text="address" />
            <InputElement
              placeholder="input_address"
              value={values.contact.address}
              onChange={(e: any) => handleChangeKeyValue(e, "address")}
            />
            {errors.contact?.address && touched.contact?.address && (
              <TextError
                text={errors.contact?.address}
                option={{ name: "địa chỉ", length: 255 }}
              />
            )}
          </div>
        </div>


        <div>
          <LabelInput text="content" />
          <InputElement
            placeholder="input_content"
            value={values.contact.content}
            onChange={(e: any) => handleChangeKeyValue(e, "content")}
          />
          {errors.contact?.content && touched.contact?.content && (
            <TextError
              text={errors.contact?.content}
              option={{ name: "mô tả", length: 255 }}
            />
          )}
        </div>

      </div>

      <div>
        <TitleAdminPage text={"customer_feedback_replied"} />

        <div className=" my-5">
          <LabelInput text="content" />
          <TextAreaElement
            placeholder="input_content"
            value={values.contact.feedback}
            onChange={(e: any) => handleChangeKeyValue(e, "feedback")}
          />
          {errors.contact?.feedback && touched.contact?.feedback && (
            <TextError
              text={errors.contact?.feedback}
              option={{ name: "mô tả", length: 255 }}
            />
          )}
        </div>
      </div>

      { type != "view" && <div>
        <GroupButton
          onCancel={closeModal}
          onSubmit={handleSubmit}
          disable={isSubmitting}
        />
      </div> }
    </div>
  );
};

export default ShowAdvisoryRequest