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
import clsx from "clsx";

const itemTb = {
  nameTable: "",
  table: {
    listNameTable: [
      {
        name: "",
      },
      {
        name: "",
      },
      {
        name: "",
      },
    ],
    listAtributies: [
      {
        atrbes: [
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
        ],
      },
    ],
  },
};
const SpecialProduct = () => {
  const formik = useFormik({
    initialValues: [
      {
        nameTable: "",
        table: {
          listNameTable: [
            {
              name: "",
            },
            {
              name: "",
            },
            {
              name: "",
            },
          ],
          listAtributies: [
            {
              atrbes: [
                {
                  name: "",
                },
                {
                  name: "",
                },
                {
                  name: "",
                },
              ],
            },
          ],
        },
      },
    ],
    validationSchema: Yup.array().of(
      Yup.object({
        nameTable: Yup.string().required("require.empty").max(255, "max"),
        table: Yup.object({
          listNameTable: Yup.array().of(
            Yup.object({
              name: Yup.string().required("require.empty").max(25, "max"),
            })
          ),
          listAtributies: Yup.array()
            .min(1, "min")
            .of(
              Yup.object({
                atrbes: Yup.array()
                  .min(1, "min")
                  .of(
                    Yup.object({
                      name: Yup.string()
                        .required("require.empty")
                        .max(100, "max"),
                    })
                  ),
              })
            ),
        }),
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

  const handleAddOrRemoteTableIndex = (index: number) => {
    const newValues = [...values];
    if (index >= 0) {
      newValues.splice(index, 1);
    } else {
      const itemTable = {
        nameTable: "",
        table: {
          listNameTable: [
            {
              name: "",
            },
            {
              name: "",
            },
            {
              name: "",
            },
          ],
          listAtributies: [
            {
              atrbes: [
                {
                  name: "",
                },
                {
                  name: "",
                },
                {
                  name: "",
                },
              ],
            },
          ],
        },
      };
      newValues.push(itemTable);
    }
    setValues(newValues);
  };

  const handleAddOrRemoteRowTableIndex = (
    indexTable: number,
    indexRow: number
  ) => {
    const newValues = [...values];
    if (indexRow >= 0) {
      newValues[indexTable].table.listAtributies.splice(indexRow, 1);
    } else {
      const itemRow = {
        atrbes: [
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
        ],
      };

      newValues[indexTable].table.listAtributies.push(itemRow);
    }
    setValues(newValues);
  };

  const handleChangeNameTableOrAtributes = (
    e: ChangeEvent<HTMLInputElement>,
    indexTable: number,
    indexRow: number,
    indexAtrb?: number
  ) => {
    const value = e.target.value;
    const newValues = [...values];
    if (indexRow >= 0 && indexAtrb != undefined && indexAtrb >= 0) {
      newValues[indexTable].table.listAtributies[indexRow].atrbes[
        indexAtrb
      ].name = value;
    } else {
      newValues[indexTable].nameTable = value;
    }
    setValues(newValues);
  };
  const handleChangeNameColumn = (
    e: ChangeEvent<HTMLInputElement>,
    indexTable: number,
    indexCol: number
  ) => {
    const value = e.target.value;
    const newValues = [...values];
    newValues[indexTable].table.listNameTable[indexCol].name = value;
    setValues(newValues);
  };

  return (
    <div>
      <div className="flex items-end justify-between pb-6 border-b">
        <TitleAdminPage text="special" />
        <Button
          color="empty"
          text="add_table"
          className="px-6 py-3 !w-fit"
          imageLeft={<IcPlusAdd />}
          onClick={() => handleAddOrRemoteTableIndex(-1)}
        />
      </div>
      <div>
        {values.map((table, index) => {
          return (
            <div key={index} className="mt-6 pb-6">
              <LabelInput text="table_name" />
              <div className="flex items-start justify-between gap-6">
                <InputElement
                  placeholder="input_table_name"
                  name="title"
                  value={table.nameTable}
                  className="mb-2"
                  onChange={(e) =>
                    handleChangeNameTableOrAtributes(e, index, -1)
                  }
                />
                <div
                  className="cursor-pointer w-6 pt-4"
                  onClick={() => handleAddOrRemoteTableIndex(index)}
                >
                  <IcDelete />
                </div>
              </div>

              <div className=" my-4 gap-6 flex justify-between">
                <div className="w-full rounded-10">
                  <div className="grid grid-cols-3 h-14 bg-main rounded-t-10 overflow-hidden">
                    {table?.table?.listNameTable.map((name, indexName) => {
                      return (
                        <div
                          className="flex items-center  px-4"
                          key={indexName}
                        >
                          <InputElement
                            placeholder="input_name_col"
                            name="col"
                            className="!bg-transparent text-white border-none"
                            value={name.name}
                            onChange={(e) =>
                              handleChangeNameColumn(e, index, indexName)
                            }
                          />
                        </div>
                      );
                    })}
                  </div>
                  {table?.table?.listAtributies.map((attrb, indexAtrb) => {
                    return (
                      <div
                        key={indexAtrb}
                        className={clsx("grid grid-cols-3 h-14 relative", {
                          "bg-F5F5F5": indexAtrb % 2 != 0,
                          "rounded-b-10":
                            indexAtrb + 1 ===
                            table?.table?.listAtributies.length,
                        })}
                      >
                        {attrb.atrbes.map((a, i) => {
                          return (
                            <div className={clsx("flex items-center ")} key={i}>
                              <InputElement
                                placeholder="input_data"
                                name="path"
                                className="!bg-transparent border-none"
                                value={a.name}
                                onChange={(e) =>
                                  handleChangeNameTableOrAtributes(
                                    e,
                                    index,
                                    indexAtrb,
                                    i
                                  )
                                }
                              />
                            </div>
                          );
                        })}
                        <div
                          className="absolute top-0 -right-12 cursor-pointer w-6 pt-4"
                          onClick={() =>
                            handleAddOrRemoteRowTableIndex(index, indexAtrb)
                          }
                        >
                          <IcDelete />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="w-6"></div>
              </div>

              {errors[index] && touched[index] && (
                <TextError text={"require.table_special"} />
              )}
              <Button
                color="empty"
                text="add_row"
                className="px-6 py-3 !w-fit"
                imageLeft={<IcPlusAdd />}
                onClick={() => handleAddOrRemoteRowTableIndex(index, -1)}
              />
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

export default SpecialProduct;
