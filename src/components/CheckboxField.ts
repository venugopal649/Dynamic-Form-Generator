import React, { useState } from "react";
import { FieldContainer, Label } from "./_fieldStyles";

// Define the type for the props
interface CheckboxFieldProps {
  label: string;
  name: string;
  options: string[];
  error?: string; // error is optional
  touched: { [key: string]: boolean }; // touched is an object with keys being the names of the fields
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue: (field: string, value: string) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = (props) => {
  const [checkedItems, setCheckedItems] = useState<Map<string, string>>(new Map());

  const handleCheckItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let items = new Map(checkedItems);

    if (checkedItems.has(name)) {
      items.delete(name);
    } else {
      items.set(name, value);
    }

    setCheckedItems(items);
    props.setFieldValue(props.name, Array.from(items.values()).toString());
  };

  return (
    <FieldContainer>
      <div className="label">{props.label}</div>
      {props.options.map((opt, index) => {
        const checkboxName = `${props.name}-${index}`;
        return (
          <Label key={index}>
            <input
              type="checkbox"
              name={checkboxName}
              value={opt}
              checked={checkedItems.has(checkboxName)}
              onBlur={props.handleBlur}
              onChange={handleCheckItem}
            />
            {opt}
          </Label>
        );
      })}
      {props.error && props.touched[props.name] && (
        <div className="error">{props.error}</div>
      )}
    </FieldContainer>
  );
};

export default CheckboxField;
