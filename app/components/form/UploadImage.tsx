import { FORM_STEPS } from "@/utils/constants/formSteps";
import clsx from "clsx";
import NextImage from "next/image";
import { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

export const UploadImage = () => {
  const {
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const step = watch("step");
  const image = watch("image");
  useEffect(() => {
    if (!image) {
      setError("image", {
        type: "required",
        message: "Image is required",
      });
    } else {
      if (
        errors.image?.type === "required" ||
        errors.image?.type === "maxSize"
      ) {
        clearErrors("image");
      }
    }
  }, [image, setError, clearErrors, errors]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 600 || img.height > 600) {
          setError("image", {
            type: "maxSize",
            message: "Image dimensions must be 600x600 pixels or smaller",
          });
          return;
        }
        //set image as base64
        const reader = new FileReader();
        reader.onload = () => {
          clearErrors("image");
          setValue("image", reader.result as string);
        };
        reader.readAsDataURL(file);
      };
    },
    [setValue, clearErrors, setError]
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
      setError("image", {
        type: "fileType",
        message: error[0].errors[0].message,
      });
    },
  });
  if (step !== FORM_STEPS.IMAGE_UPLOAD) return null;

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-foreground mb-1">
        Profile Image <span className="text-error">*</span>
      </label>
      <div
        {...getRootProps()}
        className={clsx(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors duration-200",
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary/50",
          errors.image ? "border-error bg-error/5" : ""
        )}
      >
        <input {...getInputProps()} />
        {image ? (
          <div className="relative w-32 h-32 mx-auto mb-4">
            <NextImage
              src={image}
              alt="Uploaded"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : null}
        {isDragActive ? (
          <p className="text-primary">Drop the image here ...</p>
        ) : (
          <p className="text-secondary">
            Drag and drop an image here, or click to select
          </p>
        )}
        <p className="mt-2 text-xs text-secondary">
          Max size: 1MB, Dimensions: 600x600px
        </p>
      </div>
      {errors.image && (
        <p className="mt-1 text-sm text-error">
          {errors.image?.message as string}
        </p>
      )}
    </div>
  );
};
