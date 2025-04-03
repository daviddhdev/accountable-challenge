import { FORM_STEPS } from "@/utils/constants/formSteps";
import NextImage from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

export const UploadImage = () => {
  const { watch, setValue } = useFormContext();
  const [error, setError] = useState<string | null>(null);
  const step = watch("step");
  const image = watch("image");
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 600 || img.height > 600) {
          setError("Image dimensions must be 600x600 pixels or smaller");
          return;
        }
        //set image as base64
        const reader = new FileReader();
        reader.onload = () => {
          setError(null);
          setValue("image", reader.result as string);
        };
        reader.readAsDataURL(file);
      };
    },
    [setValue]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 1024 * 1024, //1mb
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    onDropRejected: (error) => {
      console.log(error);
      setError(error[0].errors[0].message);
    },
  });
  if (step !== FORM_STEPS.IMAGE_UPLOAD) return null;

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {image && (
        <NextImage src={image} alt="Uploaded" width={300} height={300} />
      )}
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
