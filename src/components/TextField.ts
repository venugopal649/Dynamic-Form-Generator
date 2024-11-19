import React from "react";
import { FieldContainer, Input } from "./_fieldStyles";

// Define the props interface for the component
interface TextFieldProps {
  label?: string; // Optional label for the input field
  name: string; // Name of the input field (required)
  placeholder?: string; // Optional placeholder text for the input
  value: string | number; // Value of the input (can be string or number)
  error?: string; // Optional error message
  touched: Record<string, boolean>; // Tracks if a field has been touched
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange handler for input
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void; // onBlur handler for input
  type?: string; // Optional type of the input (default will be 'text')
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  error,
  touched,
  onChange,
  handleBlur,
  type = "text", // Default input type is text
}) => {
  return (
    <FieldContainer>
      {label && <div className="label">{label}</div>}
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
      />
      {error && touched[name] && <div className="error">{error}</div>}
    </FieldContainer>
  );
};

export default TextField;
