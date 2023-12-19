import React, { ChangeEvent, useContext, useEffect } from "react";
import TitleAdminPage from "../../../../components/admin/TitleAdminPage";
import LabelInput from "../../../../components/LabelInput";
import { InputElement } from "../../../../components/InputElement";
import InputUploadFile from "../../../../components/InputUploadFile";
import { useHandleImage } from "../../../../hooks/useHandleImage";
import ImagePreview from "../../../../components/ImagePreview";
import { useFormik } from "formik";
import * as Yup from "Yup";
import { Button } from "../../../../components/Button";
import IcPlusAdd from "../../../../assets/icons/IcPlusAdd";
import IcDelete from "../../../../assets/icons/IcDelete";
import TextError from "../../../../components/TextError";
import GroupButton from "../../../../components/admin/GroupButton";
import { ModalContext } from "../../../../context";
import { CategoryParent } from "../../../../types/categoriesType";

const initialCategories = {
  id: undefined,
  title: "",
  link: "",
  description: "",
  children: [
    {
      id: undefined,
      title: "",
      children: [
        {
          id: undefined,
          title: "",
        },
      ],
    },
  ],
};

const EditCategoryForm = ({ category }: { category?: CategoryParent }) => {
  const { preViewImage, handleChange, handleDelete, file } = useHandleImage(
    category?.link ?? ""
  );
  const { closeModal } = useContext(ModalContext);
  const formik = useFormik<{ category: CategoryParent }>({
    initialValues: {
      category: category || initialCategories,
    },
    validationSchema: Yup.object({
      category: Yup.object({
        title: Yup.string().required("require.empty").max(255, "max"),
        description: Yup.string().required("require.empty").max(525, "max"),
        imageLink: Yup.string().required("require.empty"),
        categoryChild: Yup.array().of(
          Yup.object().shape({
            title: Yup.string().required("require.empty").max(255, "max"),
            categoryChild: Yup.array().of(
              Yup.object().shape({
                title: Yup.string().required("require.empty").max(255, "max"),
              })
            ),
          })
        ),
      }),
    }),
    onSubmit: async (value) => {
      console.log(value);
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

  const handleAdCategoryLevel1 = () => {
    const value = values.category;
    value.children.push({
      id: undefined,
      title: "",
      children: [],
    });

    setFieldValue("category", value);
  };

  const handleAdCategoryLevel2 = (index: number) => {
    const value = values.category;
    value.children[index].children?.push({
      id: undefined,
      title: "",
    });
    setFieldValue("category", value);
  };

  const handleDeleteCategoryLevel = (index: number, indexChild: number) => {
    const value = values.category;
    if (indexChild >= 0) {
      value.children[index].children?.splice(indexChild, 1);
    } else {
      value.children.splice(index, 1);
    }
    setFieldValue("category", value);
  };

  const handleChangeNameCategory = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    indexChild: number
  ) => {
    const targetValue = e.target.value;
    const value = values.category;
    if (indexChild >= 0) {
      value.children[index].children![indexChild].title = targetValue;
    } else {
      value.children[index].title = targetValue;
    }
    setFieldValue("category", value);
  };

  const handleChangeKeyValue = (
    e: ChangeEvent<HTMLInputElement>,
    name: "title" | "description"
  ) => {
    const value = values.category;
    value[name] = e.target.value;
    setFieldValue("category", value);
  };

  const handleValidateCategories = () => {
    const value = values.category.children;

    const newValue = value.filter((child, index) => {});
  };
  useEffect(() => {
    const value = values.category;
    value.link = preViewImage;
    setFieldValue("category", value);
  }, [preViewImage]);

  return (
    <div className="w-[60vw] max-h-[80vh] overflow-y-scroll hidden-scroll rounded-10 bg-white py-10 px-6">
      <TitleAdminPage
        className="!text-[32px] leading-[40px] mb-10 text-center uppercase !w-full"
        text={category ? "edit_category" : "add_category"}
      />
      <div className="flex flex-col gap-6 mb-6">
        <div>
          <LabelInput text="big_category" />
          <InputElement
            placeholder="input_big_category"
            name="title"
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
        <div>
          <TitleAdminPage text={"second_category"} />
          <div className=" my-5">
            <div className="rounded-10 border border-border p-6">
              <TitleAdminPage
                text={"level_2category"}
                className="!text-lg !font-semibold"
              />
              <div className="flex flex-col gap-6 mt-5">
                {values.category?.children.map((item, index2) => {
                  return (
                    <div
                      key={index2}
                      className="rounded-10 border border-border p-6"
                    >
                      <LabelInput
                        isRequire={false}
                        text={` Tên danh mục con ${index2 + 1} (cấp 2)`}
                      />
                      <div className="flex justify-between gap-6">
                        <InputElement
                          placeholder="input_description"
                          name="description"
                          value={item?.title ?? ""}
                          onChange={(e: any) =>
                            handleChangeNameCategory(e, index2, -1)
                          }
                        />
                        <div
                          onClick={() => handleDeleteCategoryLevel(index2, -1)}
                          className="flex items-center justify-center cursor-pointer border border-border rounded-10 w-12 h-12"
                        >
                          <IcDelete />
                        </div>
                      </div>

                      {item?.children?.map((cate3, index3) => {
                        return (
                          <div key={index3} className="pl-6 my-1">
                            <LabelInput
                              isRequire={false}
                              text={`Tên danh mục con ${index3 + 1} (cấp 3)`}
                            />
                            <div className="flex justify-between gap-6">
                              <InputElement
                                placeholder="input_description"
                                name="description"
                                value={cate3?.title ?? ""}
                                onChange={(e: any) =>
                                  handleChangeNameCategory(e, index2, index3)
                                }
                              />
                              <div
                                onClick={() =>
                                  handleDeleteCategoryLevel(index2, index3)
                                }
                                className="flex items-center justify-center cursor-pointer border border-border rounded-10 w-12 h-12"
                              >
                                <IcDelete />
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <p
                        className="text-active underline mt-2 cursor-pointer"
                        onClick={() => handleAdCategoryLevel2(index2)}
                      >
                        Thêm danh mục cấp 3
                      </p>
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
                  text="add_level_2category"
                  className="px-6 py-3 !w-fit"
                  imageLeft={<IcPlusAdd />}
                  onClick={handleAdCategoryLevel1}
                />
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
      </div>
    </div>
  );
};

export default EditCategoryForm;
