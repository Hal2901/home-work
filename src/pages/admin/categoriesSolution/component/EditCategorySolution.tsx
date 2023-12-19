import React, { ChangeEvent, useContext, useEffect } from "react";
import {
  CategoryParent,
  CategorySolution,
} from "../../../../types/categoriesType";
import { ModalContext } from "../../../../context";
import { useHandleImage } from "../../../../hooks/useHandleImage";
import TitleAdminPage from "../../../../components/admin/TitleAdminPage";
import LabelInput from "../../../../components/LabelInput";
import { InputElement } from "../../../../components/InputElement";
import { useFormik } from "formik";
import * as Yup from "Yup";
import TextError from "../../../../components/TextError";
import InputUploadFile from "../../../../components/InputUploadFile";
import ImagePreview from "../../../../components/ImagePreview";
import GroupButton from "../../../../components/admin/GroupButton";
import IcDelete from "../../../../assets/icons/IcDelete";
import { Button } from "../../../../components/Button";
import IcPlusAdd from "../../../../assets/icons/IcPlusAdd";
import { solutionCategoriesService } from "../../../../services/solution/solutionCategoriesService";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { uploadService } from "../../../../services/uploadService";
import { getUrlImage } from "../../../../utils/constants";

interface Props {
  data: CategorySolution;
  onReload: () => void;
}

const initialCategories = {
  id: undefined,
  link: "",
  title: "",
  description: "",
  children: [
    {
      id: undefined,
      title: "",
    },
  ],
};
const EditCategorySolution = ({ data, onReload }: Props) => {
  const { closeModal } = useContext(ModalContext);
  const { t } = useTranslation();
  const { preViewImage, handleChange, handleDelete, file } = useHandleImage(
    data?.link ? getUrlImage(data?.link) : ""
  );
  const formik = useFormik<{ category: CategorySolution }>({
    initialValues: {
      category: data || initialCategories,
    },
    validationSchema: Yup.object({
      category: Yup.object({
        title: Yup.string().required("require.empty").max(255, "max"),
        description: Yup.string().required("require.empty").max(525, "max"),
        link: Yup.string().required("require.empty"),
        children: Yup.array().of(
          Yup.object().shape({
            title: Yup.string().required("require.empty").max(255, "max"),
          })
        ),
      }),
    }),
    onSubmit: async (value) => {
      try {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const linkImages = await uploadService.uploadImages(formData);
          value.category.link = linkImages[0].linkMedia;
        }
        const uploaded = await solutionCategoriesService.postOrUpdateCategory(
          value.category
        );
        onReload();
        toast.success(
          data
            ? t("message.success.updated_solution_cate")
            : t("message.success.posted_solution_cate")
        );
      } catch (error) {
        toast.error(
          data
            ? t("message.error.updated_solution_cate")
            : t("message.error.posted_solution_cate")
        );
      } finally {
        closeModal();
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
    name: "title" | "description"
  ) => {
    const value = values.category;
    value[name] = e.target.value;
    setFieldValue("category", value);
  };

  const handleChangeNameSubCate = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = values.category;

    const targetValue = e.target.value;
    value.children[index].title = targetValue;
    setFieldValue("category", value);
  };
  const handleAddOrDeleteCateSub = (index: number) => {
    const value = values.category;
    if (index >= 0) {
      value.children.splice(index, 1);
    } else {
      value.children.push({
        id: undefined,
        title: "",
      });
    }
    setFieldValue("category", value);
  };
  useEffect(() => {
    const value = values.category;
    if (file) {
      value.link = preViewImage;
    }
    setFieldValue("category", value);
  }, [preViewImage]);

  return (
    <div className="w-[60vw] max-h-[80vh] overflow-y-scroll hidden-scroll rounded-10 bg-white py-10 px-6">
      <TitleAdminPage
        className="!text-[32px] leading-[40px] mb-10 text-center uppercase !w-full"
        text={data ? "edit_category" : "add_category"}
      />
      <div className="flex flex-col gap-6 mb-6">
        <div>
          <LabelInput text="big_category" />
          <InputElement
            placeholder="input_big_category"
            name="name"
            value={values.category.title}
            onChange={(e: any) => handleChangeKeyValue(e, "title")}
          />
          {errors.category?.title && touched.category?.title && (
            <TextError
              text={errors.category?.title}
              option={{ name: "tên", length: 255 }}
            />
          )}
        </div>
        <div>
          <LabelInput text="description" />
          <InputElement
            placeholder="input_description"
            name="description"
            value={values.category.description}
            onChange={(e: any) => handleChangeKeyValue(e, "description")}
          />
          {errors.category?.description && touched.category?.description && (
            <TextError
              text={errors.category?.description}
              option={{ name: "mô tả", length: 255 }}
            />
          )}
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <LabelInput text="upload_img" subText="(Tối đa 1 ảnh)" />
            <InputUploadFile onChange={handleChange} />
            {errors.category?.link && touched.category?.link && (
              <TextError
                text={errors.category?.link}
                option={{ name: "ảnh" }}
              />
            )}
          </div>
          {preViewImage != "" && (
            <div>
              <LabelInput text="image_uploaded" />
              <ImagePreview
                imagePreview={preViewImage}
                onDelete={handleDelete}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <TitleAdminPage text={"second_category"} />

        <div className=" my-5">
          <div className="rounded-10 border border-border p-6">
            <TitleAdminPage
              text={"category_child"}
              className="!text-lg !font-semibold"
            />
            <div className="flex flex-col gap-6 mt-5">
              {values.category?.children.map((item, index2) => {
                return (
                  <div key={index2} className="">
                    <LabelInput
                      isRequire={false}
                      text={` Tên danh mục con ${index2 + 1}`}
                    />
                    <div className="flex justify-between gap-6">
                      <InputElement
                        placeholder="input_description"
                        name="description"
                        value={item?.title ?? ""}
                        onChange={(e: any) =>
                          handleChangeNameSubCate(e, index2)
                        }
                      />
                      <div
                        onClick={() => handleAddOrDeleteCateSub(index2)}
                        className="flex items-center justify-center cursor-pointer border border-border rounded-10 w-12 h-12"
                      >
                        <IcDelete />
                      </div>
                    </div>
                  </div>
                );
              })}
              {errors.category?.children && touched.category?.children && (
                <TextError
                  text={"require.empty"}
                  option={{
                    name: "tên danh mục và không được quá 255 kí tự",
                    length: 255,
                  }}
                />
              )}
              <Button
                color="empty"
                text="add_category_child"
                className="px-6 py-3 !w-fit"
                imageLeft={<IcPlusAdd />}
                onClick={() => handleAddOrDeleteCateSub(-1)}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <GroupButton
          onCancel={closeModal}
          onSubmit={handleSubmit}
          disable={isSubmitting}
        />
      </div>
    </div>
  );
};

export default EditCategorySolution;
