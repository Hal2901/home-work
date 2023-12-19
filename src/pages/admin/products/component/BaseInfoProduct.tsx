import React, { ChangeEvent, useState } from "react";
import LabelInput from "../../../../components/LabelInput";
import InputUploadFile from "../../../../components/InputUploadFile";
import { useHandleImage } from "../../../../hooks/useHandleImage";
import ImagePreview from "../../../../components/ImagePreview";
import { toast } from "react-toastify";
import { InputElement } from "../../../../components/InputElement";
import { TextAreaElement } from "../../../../components/TextAreaElement";
import DropdownSelect from "../../../../components/DropdownSelect";
import {
  actionColumns,
  categories,
  listDistributor,
} from "../../../../utils/common";
import clsx from "clsx";
import UploadFileSupportItem from "./UploadFileSupportItem";
import TitleAdminPage from "../../../../components/admin/TitleAdminPage";
import IcDotHover from "../../../../assets/icons/IcDotHover";
import { useTranslation } from "react-i18next";
import VariantItem from "./VariantItem";
import { Button } from "../../../../components/Button";
import IcPlusAdd from "../../../../assets/icons/IcPlusAdd";
import GroupButton from "../../../../components/admin/GroupButton";

const BaseInfoProduct = () => {
  const { t } = useTranslation();
  const {
    preViewImage,
    handleChange,
    handleDelete,
    handleRemoveByIndex,
    file,
    plainFiles,
  } = useHandleImage("", []);

  const [fileSupports, setFileSupports] = useState([
    {
      linkFile: "",
      linkPath: "",
    },
    {
      linkFile: "",
      linkPath: "",
    },
    {
      linkFile: "",
      linkPath: "",
    },
    {
      linkFile: "",
      linkPath: "",
    },
  ]);

  const [productVariants, setProductVariants] = useState({
    variants: [
      "Hình ảnh",
      "Tên biến thể",
      "Mô tả",
      "Loại sản phẩm",
      "File thông số",
    ],
    variantsItem: [
      {
        row: [
          {
            name: "",
            value: "",
          },
          {
            name: "",
            value: "a",
          },
          {
            name: "",
            value: "a",
          },
          {
            name: "",
            value: "a",
          },
          {
            name: "",
            value: "",
          },
        ],
      },
      {
        row: [
          {
            name: "",
            value: "",
          },
          {
            name: "",
            value: "b",
          },
          {
            name: "",
            value: "b",
          },
          {
            name: "",
            value: "b",
          },
          {
            name: "",
            value: "",
          },
        ],
      },
    ],
  });
  const handleChangeFilesImgProduct = (e: ChangeEvent<HTMLInputElement>) => {
    if (plainFiles.length >= 4) {
      return toast.error("Tải tối đa 4 ảnh cho sản phẩm.");
    }
    handleChange(e);
  };

  const handleUploadFileSupport = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newListFile = [...fileSupports];
    const file = e.target.files![0];
    newListFile[index].linkFile = URL.createObjectURL(file);
    setFileSupports(newListFile);
    e.target.value = "";
  };
  const handleChangeLinkPath = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newListFile = [...fileSupports];
    newListFile[index].linkPath = e.target.value;
    setFileSupports(newListFile);
  };
  const handleDeleteFileSp = (index: number) => {
    const newListFile = [...fileSupports];
    newListFile[index].linkFile = "";
    setFileSupports(newListFile);
  };

  const handleActionColumnPrVariant = (index: number, index2: number) => {
    const handleAddColItem = (
      index: number,
      indexReplace: number,
      name?: string
    ) => {
      const newListVariants = { ...productVariants };
      name
        ? newListVariants.variants.splice(index, indexReplace, name)
        : newListVariants.variants.splice(index, indexReplace);
      const newItemVariantRow = newListVariants.variantsItem.map((item) => {
        name
          ? item.row.splice(index, indexReplace, { name: "", value: "" })
          : item.row.splice(index, indexReplace);
        return item;
      });
      newListVariants.variantsItem = newItemVariantRow;
      setProductVariants(newListVariants);
    };
    switch (index2) {
      case 0:
        handleAddColItem(index, 0, "Cột mới bên trái");
        break;
      case 1:
        handleAddColItem(index + 1, 0, "cột mới bên phải");
        break;
      case 2:
        handleAddColItem(index, 1);
        break;
      default:
        break;
    }
  };

  const handleAddRowPropose = (index: number) => {
    const newRows = [...productVariants.variantsItem];

    if (index >= 0) {
      newRows.splice(index, 1);
    } else {
      const itemRow = productVariants.variants.map((item) => {
        return {
          name: "",
          value: "",
        };
      });
      newRows.push({ row: itemRow });
    }
    setProductVariants((preState) => {
      return {
        variants: preState.variants,
        variantsItem: newRows,
      };
    });
  };

  const handleChangeFileVariantRow = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    type: "img" | "special"
  ) => {
    const file = e.target.files![0];
    const newListVariants = [...productVariants.variantsItem];
    if (type === "img") {
      newListVariants[index].row[0].value = URL.createObjectURL(file);
    } else {
      const endIndex = newListVariants[index].row.length - 1;
      newListVariants[index].row[endIndex].value = "buikhactao";
    }
    setProductVariants({
      variants: productVariants.variants,
      variantsItem: newListVariants,
    });
    e.target.value = "";
  };

  const handleChangeInputVariantRow = (
    e: ChangeEvent<HTMLTextAreaElement>,
    indexRow: number,
    indexCol: number
  ) => {
    const value = e.target.value;
    const newListVariants = [...productVariants.variantsItem];
    newListVariants[indexRow].row[indexCol].value = value;

    setProductVariants({
      variants: productVariants.variants,
      variantsItem: newListVariants,
    });
  };
  const handleDeleteFileSpecial = (index: number) => {
    const newListVariants = [...productVariants.variantsItem];
    const endIndex = newListVariants[index].row.length - 1;
    newListVariants[index].row[endIndex].value = "";
    setProductVariants({
      variants: productVariants.variants,
      variantsItem: newListVariants,
    });
  };
  const handleChangeNameColVariant = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newListVariants = [...productVariants.variants];
    newListVariants[index] = e.target.value;
    setProductVariants({
      variants: newListVariants,
      variantsItem: productVariants.variantsItem,
    });
  };

  const handleCancel = () => {
    console.log("hủy");
  };
  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <div>
      <div className="flex flex-wrap gap-6 items-center mb-6">
        <div>
          <LabelInput text="upload_img" subText="(Tối đa 4 ảnh)" />
          <InputUploadFile onChange={handleChangeFilesImgProduct} />
          {/* {errors.category?.imageLink && touched.category?.imageLink && (
            <TextError
              text={errors.category?.imageLink}
              option={{ name: "ảnh" }}
            />
          )} */}
        </div>
        {plainFiles.length > 0 && (
          <div>
            <LabelInput text="image_uploaded" />
            <div className="flex flex-wrap items-center gap-6">
              {plainFiles.map((plainImg, index) => {
                return (
                  <ImagePreview
                    key={index}
                    imagePreview={plainImg.link ?? ""}
                    onDelete={() => handleRemoveByIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <LabelInput text="name_pr" />
          <InputElement
            placeholder="input_name_pr"
            name="name"
            value={""}
            // onChange={(e: any) => handleChangeKeyValue(e, "name")}
          />
        </div>
        <div>
          <LabelInput text="infor_pr" />
          <TextAreaElement
            placeholder="input_description"
            name="name"
            value={""}
            // onChange={(e: any) => handleChangeKeyValue(e, "name")}
          />
        </div>
        <div>
          <LabelInput text="price_propose" isRequire={false} />
          <InputElement
            placeholder="input_price_propose"
            name="name"
            value={""}
            // onChange={(e: any) => handleChangeKeyValue(e, "name")}
          />
        </div>
        <div>
          <LabelInput text="category" />
          <DropdownSelect
            name="input_category"
            className="!w-full z-30"
            classOverlay="border-transparent border-t-border"
          >
            <div className="w-1/3 rounded-10 h-auto flex flex-col border">
              {categories.map((category, index) => {
                return (
                  <div
                    key={index}
                    className={clsx(
                      "flex items-center h-12 px-6 hover:bg-active hover:text-white border-b relative showCategory",
                      {
                        "rounded-tr-10": index === 0,
                        "rounded-b-10": index + 1 === categories.length,
                      }
                    )}
                  >
                    {category.name}

                    {category?.categoryChild && (
                      <div className="w-full h-auto absolute left-full top-0 rounded-10 hidden flex-col border cateChild">
                        {category?.categoryChild.map((child, indexC) => {
                          return (
                            <div
                              key={indexC}
                              className={clsx(
                                "flex items-center h-12 px-6 text-defaultText hover:bg-active hover:text-white group  border-b relative",
                                {
                                  "rounded-t-10": indexC === 0,
                                  "rounded-b-10":
                                    indexC + 1 ===
                                    category.categoryChild.length,
                                }
                              )}
                            >
                              {child.name}
                              {child?.categoryChild && (
                                <div className="w-full h-auto absolute left-full top-0 rounded-10 hidden flex-col border group-hover:flex">
                                  {child?.categoryChild.map(
                                    (child2, indexC2) => {
                                      return (
                                        <div
                                          key={indexC2}
                                          className={clsx(
                                            "flex items-center h-12 px-6 text-defaultText hover:bg-active hover:text-white border-b",
                                            {
                                              "rounded-t-10": indexC2 === 0,
                                              "rounded-b-10":
                                                indexC2 + 1 ===
                                                child?.categoryChild?.length,
                                            }
                                          )}
                                        >
                                          {child2.name}
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </DropdownSelect>
        </div>
        <div>
          <LabelInput text="partner_or_distributor" />
          <DropdownSelect
            name="input_partner_or_distributor"
            className="!w-full"
          >
            {listDistributor.map((distribute, indexD) => {
              return (
                <label
                  key={indexD}
                  className="flex gap-2 h-12 items-center hover:bg-whiteFAFAFA border-b px-6"
                >
                  <input className="w-6 h-6 rounded-md" type="checkbox" />
                  <p>{distribute.name}</p>
                </label>
              );
            })}
          </DropdownSelect>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {fileSupports.map((item, index) => {
          return (
            <UploadFileSupportItem
              key={index}
              handleChangeFile={(e: ChangeEvent<HTMLInputElement>) => {
                handleUploadFileSupport(e, index);
              }}
              handleChangePathLink={(e: ChangeEvent<HTMLInputElement>) => {
                handleChangeLinkPath(e, index);
              }}
              handleDeleteFile={() => handleDeleteFileSp(index)}
              error={undefined}
              linkFile={item.linkFile}
              linkPath={item.linkPath}
            />
          );
        })}
      </div>
      <div className="my-8">
        <TitleAdminPage text="product_variation" />
        <div className="bg-main flex  min-w-[1440px] h-auto mt-8">
          {productVariants.variants.map((variant, indexVarian) => {
            return (
              <div
                key={indexVarian}
                className={clsx(
                  "flex items-center justify-between text-white font-medium h-14 px-4 showCategory w-200 relative",
                  {
                    "!w-[150px]": indexVarian === 0,
                    "!w-[260px]": indexVarian === 1,
                    "!w-[540px]": indexVarian === 2,
                    "!w-[290px]":
                      indexVarian + 1 === productVariants.variants.length,
                  }
                )}
              >
                {indexVarian > 2 &&
                indexVarian + 1 < productVariants.variants.length ? (
                  <InputElement
                    placeholder="input_name_col"
                    name="name"
                    className="!text-gray01 !bg-transparent border-none"
                    value={variant}
                    onChange={(e: any) =>
                      handleChangeNameColVariant(e, indexVarian)
                    }
                  />
                ) : (
                  variant
                )}

                {indexVarian > 2 &&
                  indexVarian + 1 < productVariants.variants.length && (
                    <>
                      <div className="cateChild cursor-pointer hidden h-full items-center group justify-center relative">
                        <IcDotHover />
                        <div className="absolute top-full right-0 z-30 group-hover:block hidden w-200 rounded-10 overflow-hidden bg-white border">
                          {actionColumns.map((action, indexAc) => {
                            return (
                              <div
                                onClick={() =>
                                  handleActionColumnPrVariant(
                                    indexVarian,
                                    indexAc
                                  )
                                }
                                className={clsx(
                                  "h-12 text-defaultText px-4 flex items-center font-normal",
                                  {
                                    "border-b ":
                                      indexAc + 1 != actionColumns.length,
                                  }
                                )}
                                key={indexAc}
                              >
                                {t(action)}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
              </div>
            );
          })}
        </div>
        {productVariants.variantsItem.map((item, index) => {
          return (
            <VariantItem
              data={item.row}
              key={index}
              index={index}
              handleDeleteRow={() => handleAddRowPropose(index)}
              handleChangeFile={(
                e: ChangeEvent<HTMLInputElement>,
                type: "img" | "special"
              ) => handleChangeFileVariantRow(e, index, type)}
              handleChangeInputRow={(
                e: ChangeEvent<HTMLTextAreaElement>,
                indexCol: number
              ) => handleChangeInputVariantRow(e, index, indexCol)}
              handleDeleteFileSpecial={() => handleDeleteFileSpecial(index)}
            />
          );
        })}

        <div>
          <Button
            color="empty"
            text="add_row"
            className="px-4 py-3 !w-fit mt-8"
            imageLeft={<IcPlusAdd />}
            onClick={() => handleAddRowPropose(-1)}
          />
        </div>
      </div>
      <div>
        <LabelInput text="chose_propose_pr" isRequire={false} />
        <DropdownSelect
          name="chose_propose"
          className="!w-full"
          classOverlay="h-auto"
        >
          {productVariants.variants.map((variant, indexV) => {
            return (
              <label
                key={indexV}
                className="flex gap-2 h-12 items-center hover:bg-whiteFAFAFA border-b px-6"
              >
                <input className="w-6 h-6 rounded-md" type="checkbox" />
                <p>{variant}</p>
              </label>
            );
          })}
        </DropdownSelect>
      </div>
      <div className="my-8">
        <GroupButton onCancel={handleCancel} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default BaseInfoProduct;
