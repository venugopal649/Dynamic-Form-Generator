import React from "react";
import { FieldContainer, Select } from "./_fieldStyles";

// Define the type for the props
interface SelectFieldProps {
  label?: string; // Optional label for the field
  name: string; // The name of the select field (required)
  value: string | number; // The selected value (could be string or number)
  options: string[]; // Array of options to display in the select dropdown
  error?: string; // Optional error message
  touched: Record<string, boolean>; // Touched fields tracking
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // onChange handler
  handleBlur: (e: React.FocusEvent<HTMLSelectElement>) => void; // onBlur handler
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  error,
  touched,
  onChange,
  handleBlur
}) => {
  return (
    <FieldContainer>
      {label && <div className="label">{label}</div>}
      <Select
        name={name}
        defaultValue={value}
        onBlur={handleBlur}
        onChange={onChange}
      >
        <option value="">Please Select</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      {error && touched[name] && <div className="error">{error}</div>}
    </FieldContainer>
  );
};

export default SelectField;

