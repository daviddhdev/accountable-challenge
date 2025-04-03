import { FORM_STEPS } from "@/utils/constants/formSteps";
import { useFormContext } from "react-hook-form";

export const UploadImage = () => {
  const { register, watch } = useFormContext();
  const step = watch("step");
  if (step !== FORM_STEPS.IMAGE_UPLOAD) return null;
  return (
    <div>
      <label htmlFor="image">Upload Image</label>
      <input type="file" {...register("image")} />
    </div>
  );
};
