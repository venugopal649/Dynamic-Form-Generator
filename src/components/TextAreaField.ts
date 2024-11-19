import React from "react";
import { FieldContainer, TextArea } from "./_fieldStyles";

// Define the type for the props
interface TextAreaFieldProps {
  label?: string; // Optional label for the field
  name: string; // Name of the text area field (required)
  placeholder?: string; // Optional placeholder for the text area
  value: string; // The value of the text area (typically a string)
  error?: string; // Optional error message
  touched: Record<string, boolean>; // Touched fields tracking
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange handler
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void; // onBlur handler
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  error,
  touched,
  onChange,
  handleBlur
}) => {
  return (
    <FieldContainer>
      {label && <div className="label">{label}</div>}
      <TextArea
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={onChange}
      />
      {error && touched[name] && <div className="error">{error}</div>}
    </FieldContainer>
  );
};

export default TextAreaField;
