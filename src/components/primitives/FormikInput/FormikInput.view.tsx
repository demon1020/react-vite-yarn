import { FC, forwardRef } from "react";

import { FormikInputProps } from "./FormikInput.props";
import { Field, FieldProps } from "formik";
import FormikErrorElement from "../FormikErrorElement";

const FormikInputView: FC<FormikInputProps> = forwardRef<
  HTMLInputElement,
  FormikInputProps
>(({ name, type = "text", label, options, placeholder }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <div className="label pb-[0.4rem]">
          <span className="label-text font-semibold">{label}</span>
        </div>
      )}
      <Field name={name}>
        {({ field }: FieldProps) => (
          <input
            {...field}
            {...options}
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            onWheel={(e) => e.currentTarget.blur()}
            className="input w-full input-bordered input-md"
          />
        )}
      </Field>
      <FormikErrorElement name={name} />
    </div>
  );
});

export default FormikInputView;
