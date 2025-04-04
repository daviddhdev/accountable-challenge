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

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-foreground mb-1"
      >
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "w-full px-3 py-2 rounded-md border",
          "focus:ring-2 focus:ring-primary focus:border-transparent",
          "transition-colors duration-200",
          errors[name]
            ? "border-error bg-error/5"
            : "border-border hover:border-primary/50"
        )}
        {...register(name, {
          required: required ? `${label} is required` : false,
          ...validation,
        })}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-error">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
