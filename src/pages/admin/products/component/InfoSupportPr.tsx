import React, { ChangeEvent } from "react";
import TitleAdminPage from "../../../../components/admin/TitleAdminPage";
import { Button } from "../../../../components/Button";
import IcPlusAdd from "../../../../assets/icons/IcPlusAdd";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "Yup";
import LabelInput from "../../../../components/LabelInput";
import { InputElement } from "../../../../components/InputElement";
import IcDelete from "../../../../assets/icons/IcDelete";
import GroupButton from "../../../../components/admin/GroupButton";
import TextError from "../../../../components/TextError";

const InfoSupportPr = () => {
  const formik = useFormik({
    initialValues: [
      {
        title: "",
        path: "",
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object({
        title: Yup.string().required("require.empty").max(255, "max"),
        path: Yup.string().required("require.empty").max(255, "max"),
      })
    ),
    onSubmit: async (value) => {},
  });
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    setValues,
    handleSubmit,
  } = formik;
  const handleAddSupportItem = () => {
    setValues([
      ...values,
      {
        title: "",
        path: "",
      },
    ]);
  };
  const handleDeleteSp = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };
  const handleChangeItemValue = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    type: "title" | "path"
  ) => {
    const newValues = [...values];
    newValues[index][`${type}`] = e.target.value;
    setValues(newValues);
  };
  return (
    <div>
      <div className="flex items-end justify-between pb-6 border-b">
        <TitleAdminPage text="support" />
        <Button
          color="empty"
          text="add_support"
          className="px-6 py-3 !w-fit"
          imageLeft={<IcPlusAdd />}
          onClick={handleAddSupportItem}
        />
      </div>
      <div>
        {values.map((value, indexV) => {
          return (
            <div
              key={indexV}
              className="mt-6 pb-6 border-b flex justify-between items-center gap-6"
            >
              <div className="w-11/12">
                <LabelInput text="title" />
                <InputElement
                  placeholder="input_title"
                  name="title"
                  value={value.title}
                  className="mb-2"
                  onChange={(e) => handleChangeItemValue(e, indexV, "title")}
                />
                {errors[indexV]?.title && touched[indexV]?.title && (
                  <TextError
                    text={errors[indexV]!.title! ?? ""}
                    option={{ name: "tiêu đề", length: 255 }}
                  />
                )}
                <LabelInput text="path" />
                <InputElement
                  placeholder="input_path"
                  name="path"
                  value={value.path}
                  onChange={(e) => handleChangeItemValue(e, indexV, "path")}
                />
                {errors[indexV]?.path && touched[indexV]?.path && (
                  <TextError
                    text={errors[indexV]!.path! ?? ""}
                    option={{ name: "đường dẫn", length: 255 }}
                  />
                )}
              </div>
              <div className="w-fit ">
                <div
                  className="cursor-pointer"
                  onClick={() => handleDeleteSp(indexV)}
                >
                  <IcDelete />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-8">
        <GroupButton
          onCancel={() => {}}
          onSubmit={handleSubmit}
          disable={isSubmitting}
        />
      </div>
    </div>
  );
};

export default InfoSupportPr;
