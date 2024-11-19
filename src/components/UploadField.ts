import React from "react";
import { FieldContainer, Upload } from "./_fieldStyles";

interface UploadFieldProps {
  label?: string;
  name: string;
  value?: any;
  error?: string;
  touched: { [key: string]: boolean };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const UploadField: React.FC<UploadFieldProps> = (props) => {
  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      <Upload
        type="file"
        name={props.name}
        value={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}
      />
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
};

export default UploadField;
