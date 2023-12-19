import { useNavigate } from "react-router-dom";
import { InputElement } from "../../../components/InputElement";
import LabelInput from "../../../components/LabelInput";
import GroupButton from "../../../components/admin/GroupButton";
import TitleAdminPage from "../../../components/admin/TitleAdminPage";
import clsx from "clsx";
import { useFormik } from "formik";
import { ChangeEvent } from "react";
import * as Yup from "Yup";
import TextError from "../../../components/TextError";
import { VideoType } from "../../../types/VideoType";

interface Props {
  type: "add" | "edit";
}

const initialVideo = {
    linkUrl: "",
    title: ""
}

const EditVideo = ({type}:Props) => {
  const navigator = useNavigate();


  // Cancel Btn
  const handleCancel = () => {
    navigator(-1);
  };

  // Formik
  const formik = useFormik<{ video: VideoType }>({
    initialValues: {
     video: type === "add"? initialVideo: initialVideo,
    },
    validationSchema: Yup.object({
      video: Yup.object({
        linkUrl: Yup.string().required("require.empty").max(255, "max"),
        title: Yup.string().required("require.empty").max(255, "max"),
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



  // Handle text input value
  const handleChangeKeyValue = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof typeof values.video 
  ) => {
    values.video[field] = e.target.value;
    setValues(values); // Trigger update
  }


  return (
    <div>
      <TitleAdminPage text={clsx(
          type === "add" && "add_video",
          type === "edit" && "edit_video"
        )}
      />
      <div className="my-8"></div>
      <div className="flex flex-col gap-6">

        <div>
          <LabelInput text="link" />
          <InputElement
            placeholder="input_link"
            value={values.video.linkUrl}
            onChange={(e: any) => handleChangeKeyValue(e, "linkUrl")}
          />
          {errors.video?.linkUrl && touched.video?.linkUrl && (
            <TextError
              text={errors.video?.linkUrl}
              option={{ name: "đường dẫn liên kết", length: 255 }}
            />
          )}
        </div>

        <div>
          <LabelInput text="title" />
          <InputElement
            placeholder="input_title"
            value={values.video.linkUrl}
            onChange={(e: any) => handleChangeKeyValue(e, "title")}
          />
          {errors.video?.linkUrl && touched.video?.linkUrl && (
            <TextError
              text={errors.video?.linkUrl}
              option={{ name: "tiêu đề", length: 255 }}
            />
          )}
        </div>

      </div>
      <div className="my-8">
        <GroupButton onCancel={handleCancel} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default EditVideo;

