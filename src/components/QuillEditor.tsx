import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { uploadService } from "../services/uploadService";
import { getUrlImage } from "../utils/constants";

type Props = {
  data: string;
  onChange: (value: any) => void;
};

const QuillEditor = memo(({ data, onChange }: Props) => {
  const reactQuillRef = useRef<ReactQuill>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("file", file);
        const linkImages = await uploadService.uploadImages(formData);
        const url = getUrlImage(linkImages[0].linkMedia);
        const quill = reactQuillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          range && quill.getEditor().insertEmbed(range.index, "image", url);
        }
      }
    };
  }, []);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ align: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );
  const format = useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "align",
    ],
    []
  );
  return (
    <div>
      <ReactQuill
        theme="snow"
        value={data}
        ref={reactQuillRef}
        modules={modules}
        formats={format}
        onChange={onChange}
      />
    </div>
  );
});

export default QuillEditor;
