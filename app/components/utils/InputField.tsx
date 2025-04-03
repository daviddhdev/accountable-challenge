import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  required?: boolean;
  validation?: Record<string, unknown>;
}

export const InputField = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  validation = {},
}: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
          errors[name] ? "border-red-500" : ""
        )}
        {...register(name, {
          required: required ? `${label} is required` : false,
          ...validation,
        })}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
