import React from "react";
import { FieldProps as FormikFieldProps } from "formik";
import TextField from "./TextField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import RadioButtonField from "./RadioButtonField";
import CheckboxField from "./CheckboxField";
import UploadField from "./UploadField";

// Define the field types
interface FieldItem {
  id: string;
  type: "text" | "select" | "textarea" | "radio" | "checkbox" | "upload";
  label: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
}

// Define the component props
interface FieldProps {
  fields: FieldItem[];
  formikProps: FormikFieldProps;
}

const fieldMap: Record<string, React.FC<any>> = {
  text: TextField,
  select: SelectField,
  textarea: TextAreaField,
  radio: RadioButtonField,
  checkbox: CheckboxField,
  upload: UploadField,
};

const Field: React.FC<FieldProps> = ({ fields, formikProps }) => {
  const {
    errors,
    touched,
    values,
    handleBlur,
    handleChange,
    setFieldValue,
  } = formikProps;

  return (
    <>
      {fields.map((item, index) => {
        const Component = fieldMap[item.type];
        const error = errors.hasOwnProperty(item.id) && errors[item.id];

        if (!item.type) {
          return null;
        }

        return (
          <Component
            key={index}
            label={item.label}
            name={item.id}
            placeholder={item.placeholder}
            value={values[item.id]}
            options={item.options}
            touched={touched}
            error={error}
            handleBlur={handleBlur}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />
        );
      })}
    </>
  );
};

export default Field;
