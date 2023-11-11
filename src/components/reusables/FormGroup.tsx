import React from "react";

interface FormGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  last?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  last,
  required = true,
  ...inputProps
}) => {
  return (
    <div className={`flex flex-col gap-[10px] ${!last ? "mb-5" : ""}`}>
      <label
        htmlFor={inputProps.name}
        className="self-stretch text-sm font-medium text-gray"
      >
        {label}
      </label>
      <input
        className="self-stretch rounded border border-solid border-borderColor bg-white px-[15px] py-[13px] text-xs text-black placeholder-lightGray"
        placeholder={`Enter your ${label}`}
        {...inputProps}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
