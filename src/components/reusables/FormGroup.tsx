import React from "react";

interface FormGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  last?: boolean;
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  last,
  required = true,
  ...inputProps
}) => {
  const hiddenType = inputProps.type === "hidden";
  const showMarginBottom = !hiddenType && !last;

  return (
    <div
      className={`flex flex-col ${!hiddenType ? "gap-[10px]" : ""}  ${
        showMarginBottom ? "mb-5" : ""
      }`}
    >
      {label && (
        <label
          htmlFor={inputProps.name}
          className="text-sm font-medium text-gray"
        >
          {label}
        </label>
      )}
      <input
        className="rounded border border-solid border-borderColor bg-white px-[15px] py-[13px] text-xs text-black placeholder-lightGray"
        placeholder={`Enter your ${label}`}
        {...inputProps}
        required={required}
      />
    </div>
  );
};

export default FormGroup;
